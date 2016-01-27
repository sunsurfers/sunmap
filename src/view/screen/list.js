const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


class ListScreen extends React.Component {
  render() {
    console.log('render of ListScreen', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>this is component "ListScreen" ...</Text>
    </View>)
  }
}

ListScreen.defaultProps = {};
ListScreen.propTypes = {};

module.exports = ListScreen;