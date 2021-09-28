import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';

import Routes from './src/routes';

import { Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium
  });

  if(!fontsLoaded)
    return <AppLoading />
  
  return (
    <>
      <View style={styles.StatusBar}>
          <StatusBar translucent barStyle="light-content" />
      </View>
      <Routes />
    </>
  )
}

const styles = StyleSheet.create({
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: 'black'
  }
});