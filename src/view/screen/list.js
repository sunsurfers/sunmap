import React, {Text, View, PropTypes, ListView, TouchableHighlight, Image} from 'react-native';

const _ = require('lodash');
const {reduce, assign, map} = _;
const STYLE = require('../style');
const API = require('../../core/api');

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


class ListScreen extends React.Component {
  render() {
    console.log('render of ListScreen', this.props, this.state);

    const {locations, users, me} = this.props;

    return (
        <View style={[{}, this.props.style]}>
          <ListView
              style={$$('list')}
              dataSource={ds.cloneWithRows(getRichList({locations, users, location: me.location}))}
              renderRow={this.renderRow.bind(this)}
          />
        </View>)
  }

  renderRow(s, xxx, index) {
    var i = parseInt(index),
        bgStyle = i % 2 === 0 ? $$('list-item-odd') : $$('list-item-even');

    return (<TouchableHighlight onPress={() => this.props.goTo('profile', {id: s.id})} underlayColor={STYLE.color.orange} key={s.id}>
      <View style={[$$('list-item'), bgStyle]}>
        <View style={$$('list-item-avatar')}>
          <Image source={{uri: API.assets + '/avatars/' + s.id + '.jpg'}}
              style={$$('avatar-small')}/>
        </View>

        <View style={$$('list-item-textzone')}>
          <View style={$$('list-item-left')}>
            <Text style={$$('list-item-name')}>{s.name}</Text>
            <Text style={$$('list-item-place text-gray')}>{s.place}</Text>
          </View>
          <View style={$$('list-item-right')}>
            <View style={$$('list-item-howfar label')}><Text style={$$('label-text')}>{s.location.howfar}</Text></View>
            <Text style={$$('list-item-howlong text-gray')}>{s.location.howlong}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>)
  }
}



const getRichList = (function(){
  const geolib = require('geolib');
  const moment = require('moment');
  moment.updateLocale('ru', require('moment/locale/ru'))


  function getLocationData(loc, myLocation) {
    if (!loc) return {};

    const distanceKm = geolib.getDistance(
            {latitude: loc.lat, longitude: loc.lng},
            {latitude: myLocation.lat, longitude: myLocation.lng}
        ) / 1000;

    return {
      howlong: moment((new Date(loc.created_at))).fromNow(true),
      howfar: distanceKm > 0.1 ? distanceKm.toFixed(1) + ' KM' : (distanceKm * 1000) + 'M'
      //howfar: (distance / 1000) > 1 ? (distance / 1000).toFixed(0) + 'km' : distance + 'm'
    }
  }
  return function getRichList({locations, users, location}) {
    return users.map((s) => {
      return Object.assign({}, s,
          {location: getLocationData(locations[s.id], location)}
      );
    });
  }
})();


const $$ = require('../style').create({
  'avatar-small': {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
  },
  'list': {
    flex: 1
  },
  'list-item': {
    flexDirection: 'row',
    padding: 3,
    paddingLeft: ((70 - 50 - 3 - 3) / 2) * 2,
    height: 70,
  },
  'list-item-even': {
    backgroundColor: 'rgba(74, 144, 226, .05)',
  },
  'list-item-odd': {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  },
  'list-item-avatar': {
    flex: 2, marginTop: (70 - 50 - 3 - 3) / 2
  },
  'list-item-textzone': {
    flex: 9, flexDirection: 'row',
    marginTop: 13,
  },
  'list-item-left': {
    flex: 7
  },
  'list-item-right': {
    flex: 4,
    alignItems: 'flex-start'

  },
  'list-item-name': {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2
  },
  'list-item-place': {

  },
  'list-item-howfar': {
    marginBottom: 3
  },
  'list-item-howlong': {
    marginLeft: 5,
    fontSize: 11
  },
});


ListScreen.defaultProps = {};
ListScreen.propTypes = {};

module.exports = ListScreen;