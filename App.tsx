import React from 'react';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

import { Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold
  });

  if(!fontsLoaded)
    return <AppLoading />
  
  return (
    <Routes />
  );
}