'use strict';

import React, {
    AppRegistry,
    Component,
    } from 'react-native';

import Root from './src/root'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {map, clone, cloneDeep, toArray, isArguments} from 'lodash';

/** hack console.log for immutable console print */
!function () {
  const _originalLog = console.log;
  console.log = function () {
    if(!__DEV__) return;
    return _originalLog.apply(
        console,
        map(
            toArray(arguments),
            (a) => isArguments(a) ? cloneDeep(toArray(a)) : cloneDeep(a)
        )
    )
  };
}();

const store = createStore(combineReducers({
  router: require('./src/core/reducer/router'),
  locations: require('./src/core/reducer/locations'),
  me: require('./src/core/reducer/me'),
  users: require('./src/core/reducer/users'),
}));

AppRegistry.registerComponent('sunmap', (() => () => <Provider store={store}>
  <Root />
</Provider>));
