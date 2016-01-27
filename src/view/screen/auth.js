const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


class AuthScreen extends React.Component {
  render() {
    console.log('render of AuthScreen', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>this is component "AuthScreen" ...</Text>
    </View>)
  }
}

AuthScreen.title = 'some pretty title';
AuthScreen.defaultProps = {};
AuthScreen.propTypes = {};

module.exports = AuthScreen;