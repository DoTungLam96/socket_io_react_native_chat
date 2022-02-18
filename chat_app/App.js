/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import DrawerNavigation from './src/navigationRoute/DrawerNavigation'
// const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {
  return <DrawerNavigation />;
};
export default App;
