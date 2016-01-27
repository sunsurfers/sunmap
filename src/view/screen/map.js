const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


class MapScreen extends React.Component {
  render() {
    console.log('render of MapScreen', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>this is component "MapScreen" ...</Text>
    </View>)
  }
}

MapScreen.defaultProps = {};
MapScreen.propTypes = {};

module.exports = MapScreen;