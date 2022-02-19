/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screen/Login';
import Home from '../../screen/Home';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{width: 24, height: 24}}
                source={require('../../../images/menu.png')}
              />
            </TouchableOpacity>
          ),
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
    </Stack.Navigator>
  );
};
export default Navigation;
