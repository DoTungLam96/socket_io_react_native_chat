import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import Svgs from './constants/Svgs';
import Navigation from './component/Navigation';
const drawerNavigation = createDrawerNavigator();

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 8}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Svgs.icHome width={22} height={22} />
          <Text>Trang chủ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', marginTop: 10}}>
          <Svgs.icChat width={22} height={22} />
          <Text>Trò chuyện</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  <NavigationContainer>
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
          return {
            swipeEnabled: routeName !== 'Login' && routeName !== undefined,
            drawerLabel: 'Home',
            headerShown: false,
          };
        }}
      />
    </drawerNavigation.Navigator>
  </NavigationContainer>;
};

export default DrawerNavigation;
