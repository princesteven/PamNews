import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigationContainer } from "./navigator";

export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigationContainer/>
  </NavigationContainer>
);