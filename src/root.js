const React = require('react-native');
const {
    Text, View, PropTypes, StatusBarIOS, Animated
    } = React;

import _ from 'lodash';

const {reduce, assign} = _;

const SCREENS = require('./view/screen');
const STYLE = require('./view/style');


StatusBarIOS.setStyle(1);

class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      screenAnim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.goTo('list')
    }, 500);
  }

  goTo() {
    Animated.timing(this.state.screenAnim, {
      toValue: 1,
      duration: 222,
    }).start(() => {
      this.props.dispatch({
        type: 'goTo',
        screen: 'list',
      });

      Animated.timing(this.state.screenAnim, {
        toValue: 0,
        duration: 222,
      }).start()
    });
  }

  render() {
    const {router} = this.props.store;
    const Screen = SCREENS[router.screen];

    const screenAnimatedStyles = {
      opacity: this.state.screenAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      }),
      transform: [
        {scale: this.state.screenAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, .8]
        })}
      ]
    }

    return (<View style={{backgroundColor: STYLE.color.lightgray, flex: 1}}>
      <View style={{height: 21, backgroundColor: STYLE.color.orange}} />
      <Animated.View style={screenAnimatedStyles}>
        <Screen />
      </Animated.View>
    </View>)
  }
}

Root.defaultProps = {};
Root.propTypes = {};

module.exports = Root;