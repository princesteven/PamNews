/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {default as theme} from './theme.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './navigation/app.navigation';
import {StatusBar, SafeAreaView} from 'react-native';
import {IconRegistry, ApplicationProvider} from '@ui-kitten/components';
import {InterstitialAdManager} from 'react-native-fbads';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const InterstitialPlacementID = '2925204497605764_2925334330926114';
const twoMinutes = 10000;

const displayInterstitialAds = (placementID) => {
  InterstitialAdManager.showAd(placementID)
    .then((didClick) => console.log('Ad Shown'))
    .catch((error) => console.log('Ad Error', error));
}

export default App = () => {

  useEffect(() => {
    setTimeout(() => {
      displayInterstitialAds(InterstitialPlacementID);
    }, twoMinutes);
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <StatusBar backgroundColor="#FF6721" barStyle={'light-content'} />
        <SafeAreaView style={{flex: 1}}>
          <AppNavigator />
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
}