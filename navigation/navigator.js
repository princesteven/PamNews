import React from 'react';
import HomeScreen from '../screens/home';
import NewsContentScreen from '../screens/news';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigationContainer = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='NewsContent' component={NewsContentScreen}/>
  </Navigator>
);