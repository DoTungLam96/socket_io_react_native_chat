/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screen/Login';
import Home from '../../screen/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default Navigation;
