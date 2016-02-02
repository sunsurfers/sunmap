const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;

const $$ = require('../style').create({
  'avatar': {

  }
});

class ProfileScreen extends React.Component {
  render() {
    console.log('render of ProfileScreen', this.props, this.state);

    return (<View style={[this.props.style, {}]}>
      <View style={$$('avatar')}>

      </View>
    </View>)
  }
}

ProfileScreen.defaultProps = {

};
ProfileScreen.propTypes = {};

module.exports = ProfileScreen;