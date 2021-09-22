import React from 'react';
import { 
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';

import SettingsSvg from '../assets/settings.svg';


interface SettingsButtonProps {
  backPage: string;
}

export function SettingsButton({ backPage }: SettingsButtonProps) {
  const navigation = useNavigation();

  function handleSettings() {
    navigation.navigate('Settings', {backPage: backPage});        
  }

  return (
    <TouchableOpacity onPress={handleSettings}>
      <View style={styles.container}>
        <SettingsSvg/>
      </View>
    </TouchableOpacity>
  )
}; 

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
});