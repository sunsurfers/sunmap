const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


class SettingsScreen extends React.Component {
  render() {
    console.log('render of SettingsScreen', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>this is component "SettingsScreen" ...</Text>
    </View>)
  }
}

SettingsScreen.defaultProps = {};
SettingsScreen.propTypes = {};

module.exports = SettingsScreen;