const React = require('react-native');
const {
    Text, View, PropTypes, StatusBar, Animated, Dimensions
    } = React;

import _ from 'lodash';

const {reduce, assign} = _;

const SCREENS = require('./view/screen');
const STYLE = require('./view/style');

const {height} = Dimensions.get('window');

StatusBar.setBarStyle(1);

class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      screenAnim: new Animated.Value(0)
    }
  }

  //componentDidMount() {
  //  setTimeout(() => {
  //    this.goTo('list')
  //  }, 500);
  //}

  goTo(screen, params) {
    Animated.timing(this.state.screenAnim, {
      toValue: 1,
      duration: 222,
    }).start(() => {
      this.props.dispatch({
        type: 'goTo',
        screen: screen,
        params: params
      });

      Animated.timing(this.state.screenAnim, {
        toValue: 0,
        duration: 222,
      }).start()
    });
  }

  getScreenAnimatedStyles () {
    return {
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
  }

  render() {
    const {router} = this.props;
    const Screen = SCREENS[router.screen];

    return (<View style={{backgroundColor: STYLE.color.lightgray, flex: 1}}>
      <View style={{height: 21, backgroundColor: STYLE.color.orange}} />

      <Animated.View style={this.getScreenAnimatedStyles()}>
        <Screen style={{height: height - 21, backgroundColor: 'white'}} {...this.props} goTo={this.goTo.bind(this)}/>
      </Animated.View>
    </View>)
  }
}

Root.defaultProps = {};
Root.propTypes = {};


import ACTIONS from './core/action';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// bind dispatch to props
// easier to read, and no need to invoke dispatch manually
export default connect(
    /*createStructuredSelector({
      router (state) => state.router
    }),*/
    (state) => state,
    ACTIONS.pick('router')
)(Root);