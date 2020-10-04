import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, UsersScreen, OrdersScreen } from '../screens/home';
import { DrawerContent } from '../screens/home/home.drawer'

const { Navigator, Screen } = createDrawerNavigator();

export const HomeNavigator = () => (
  <Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Screen name='Home' component={HomeScreen} />
    <Screen name='Users' component={UsersScreen} />
    <Screen name='Orders' component={OrdersScreen} />
  </Navigator>
);