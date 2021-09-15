import React from 'react';
import { 
  View,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';

import SettingsSvg from '../assets/settings.svg';

export function SettingsButton() {
  return (
    <View style={styles.container}>
      <SettingsSvg/>
    </View>
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