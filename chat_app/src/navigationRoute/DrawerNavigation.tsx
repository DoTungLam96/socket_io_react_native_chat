/* eslint-disable react-native/no-inline-styles */
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Navigation from './component/Navigation';
import {setNavigator} from './component/NavigationServices';
import Svgs from './constants/Svgs';

const drawerNavigation = createDrawerNavigator();

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 8}}>
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 16}}>
          <Svgs.icHome width={22} height={22} />
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: 'bold',
              marginLeft: 16,
              paddingTop: 2,
            }}>
            Trang chủ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', marginTop: 24}}>
          <Svgs.icChat width={22} height={22} />
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              fontWeight: 'bold',
              marginLeft: 16,
              paddingTop: 2,
            }}>
            Trò chuyện
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = (): React.ReactElement => {
  return (
    <NavigationContainer ref={setNavigator}>
      <drawerNavigation.Navigator
        screenOptions={{
          swipeEnabled: true,
        }}
        drawerContent={props => {
          return <DrawerContent props={props} />;
        }}>
        <drawerNavigation.Screen
          name="DrawerHome"
          component={Navigation}
          options={({route}) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            console.log('routeName', routeName);
            return {
              swipeEnabled: routeName !== 'Login' && routeName !== undefined,
              drawerLabel: 'Home',
              headerShown: false,
            };
          }}
        />
      </drawerNavigation.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
