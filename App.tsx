import React from 'react';
import AppLoading from 'expo-app-loading';

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
    <Routes />
  );
}