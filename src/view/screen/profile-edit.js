const React = require('react-native');
const {
    Text, View, PropTypes
    } = React;

const _ = require('lodash');
const {reduce, assign} = _;


class ProfileEditScreen extends React.Component {
  render() {
    console.log('render of ProfileEditScreen', this.props, this.state);

    return (<View style={this.props.style}>
      <Text>this is component "ProfileEditScreen" ...</Text>
    </View>)
  }
}

ProfileEditScreen.defaultProps = {};
ProfileEditScreen.propTypes = {};

module.exports = ProfileEditScreen;