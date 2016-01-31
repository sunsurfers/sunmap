const React = require('react-native');
const geolib = require('geolib');
const moment = require('moment');

const {
    Text, View, PropTypes, ListView, TouchableHighlight, Image
    } = React;

const _ = require('lodash');
const {reduce, assign, map} = _;
const STYLE = require('../style');

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ListScreen extends React.Component {
  render() {
    console.log('render of ListScreen', this.props, this.state);

    const {locations, list, myLocation} = this.props;

    const dataSource = ds.cloneWithRows(getRichList({locations, list, myLocation}))
    return (
        <View style={[{}, this.props.style]}>
          <ListView
              style={[{flex: 1}, this.props.style]}
              dataSource={dataSource}
              renderRow={this.renderRow.bind(this)}
          />
        </View>)
  }

  onPress(id) {
    console.log('onpress', id);
  }

  renderRow(s, xxx, index) {
    var i = parseInt(index);

    return (<TouchableHighlight onPress={this.onPress.bind(this, s.id)} underlayColor={STYLE.color.orange}>
      <View style={[styles.listItem, i % 2 === 0 ? styles.listItemOdd : styles.listItemEven]} key={s.id}>

        <View style={{flex: 1, marginTop: (70 - 50 - 3 - 3) / 2}}>
          <Image source={{uri: 'http://127.0.0.1:8888/public/avatars/' + s.id + '.jpg'}} style={styles.avatar}/>
        </View>

        <View style={{flex: 5, flexDirection: 'row'}}>
          <Text key={s.name} style={{lineHeight: 28}}>
            <Text style={{marginRight: 5, marginTop: 14, color: 'black'}}>({s.sex[0]}) </Text>
            <Text style={{fontWeight: 'bold'}}>{s.name} - {s.place} {'\n'}</Text>
            <Text style={{}}>long: {s.location.howlong} ::: </Text>
            <Text style={{}}>far: {s.location.howfar}</Text>
          </Text>
        </View>

      </View>
    </TouchableHighlight>)
  }
}




function getLocationData(loc, myLocation) {
  if (!loc) return {};

  const distance = geolib.getDistance(
      {latitude: loc.lat, longitude: loc.lng},
      {latitude: myLocation.lat, longitude: myLocation.lng}
  );

  return {
    howlong: moment((new Date(loc.created_at))).fromNow(true),
    howfar: (distance / 1000) > 1 ? distance + 'km' : distance + 'm'
  }
}
function getRichList({locations, list, myLocation}) {
  return list.map((s) => {
    return Object.assign({}, s,
        {location: getLocationData(locations[s.id], myLocation)}
    );
  });
}









var styles = {
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
  },
  listItem: {
    flexDirection: 'row',
    padding: 3,
    paddingLeft: ((70 - 50 - 3 - 3) / 2) * 2,
    height: 70,
  },
  listItemEven: {
    backgroundColor: 'rgba(74, 144, 226, .05)',
  },
  listItemOdd: {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }
};

ListScreen.defaultProps = {
  myLocation: {
    'lat': 5.52455,
    'lng': 101.23423,
  },

  locations: {
    'marat': {
      'created_at': "Thu Jan 08 2016 00:00:00 GMT+0200 (EET)",
      'lat': 6.285153,
      'lng': 99.456238,
    },
    'murad': {
      'created_at': "Thu Jan 22 2016 00:00:00 GMT+0200 (EET)",
      'lat': 3.285153,
      'lng': 55.456238,
    },
    'sayana': {
      'created_at': "Thu Jan 16 2016 00:00:00 GMT+0200 (EET)",
      'lat': 5.52456,
      'lng': 101.23422,
    },
    'sasha': {
      'created_at': "Thu Jan 28 2015 00:00:00 GMT+0200 (EET)",
      'lat': 20.285153,
      'lng': 80.456238,
    },
  },
  list: [
    {
      id: 'marat',
      name: 'Марат Хасанов',
      age: 27,
      position: [51.5033630, -0.1276250],
      place: 'Пенанг, Малайзия',
      sex: 'male',
    },
    {
      id: 'sasha',
      name: 'Александр Шистеров',
      age: 29,
      position: [51.5033630, -0.1276250],
      place: 'Пхукет, Таиланд',
      sex: 'male',
    },
    {
      id: 'sayana',
      name: 'Саяна',
      age: 29,
      position: [51.5033630, -0.1276250],
      place: 'Самуи, Таиланд',
      sex: 'female',
    },
    {
      id: 'murad',
      name: 'Мурад Рогожников',
      age: 25,
      position: [51.5033630, -0.1276250],
      place: 'Пхукет, Таиланд',
      sex: 'male',
    },
  ]
};
ListScreen.propTypes = {};

module.exports = ListScreen;