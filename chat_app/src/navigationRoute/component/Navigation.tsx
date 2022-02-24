/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Intro from '../../screen/flash/Intro';
import Home from '../../screen/home/Home';
import Login from '../../screen/login/Login';
import Register from '../../screen/registerAccount/Register';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  ['Home']: undefined;
  ['Login']: undefined;
  ['Intro']: undefined;
  ['Register']: undefined;
};

const Navigation = (): React.ReactElement => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#ff548e',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{width: 24, height: 24}}
                source={require('../../../images/menu.png')}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{paddingTop: 5}}
              onPress={() => console.log('close_drawer')}>
              <Image
                style={{width: 24, height: 24}}
                source={require('../../../images/cancel.png')}
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
      <Stack.Screen
        name="Intro"
        options={{
          headerShown: false,
        }}
        component={Intro}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerShown: false,
        }}
        component={Register}
      />
    </Stack.Navigator>
  );
};
export default Navigation;
