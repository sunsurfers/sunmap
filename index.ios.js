'use strict';

import React, {
    AppRegistry,
    Component,
    } from 'react-native';

import Root from './src/root'



import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';

const store = createStore(combineReducers({
  router: require('./src/core/reducer/router'),
}));

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      store: store.getState()
    };

    store.subscribe(() => {
      this.setState({
        store: store.getState()
      })
    });
  }

  render() {
    return (<Root dispatch={store.dispatch} store={this.state.store} />);
  }
}

AppRegistry.registerComponent('sunmap', () => App);
