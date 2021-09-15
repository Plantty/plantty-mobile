import React from 'react';
import { 
  View,
  StyleSheet
} from 'react-native';
import { useRoute } from '@react-navigation/core';

import colors from '../styles/colors';

import HomeSvg from '../assets/home.svg';
import SearchSvg from '../assets/search.svg';
import NotificationSvg from '../assets/notification.svg';

interface routeParamsProps {
  actualPage: string;
}

export function Navbar() {
  const route = useRoute();

  const { actualPage } = route.params as routeParamsProps;

  return (
    <View style={styles.container}>
      <View style={actualPage == 'home' ? styles.activeButtonContainer : styles.buttonContainer}>
        <HomeSvg fill={actualPage == 'home' ? '#FFF' : '#B2B2B2'}/>
      </View>

      <View style={actualPage == 'search' ? styles.activeButtonContainer : styles.buttonContainer}>
        <SearchSvg fill={actualPage == 'search' ? '#FFF' : '#B2B2B2'}/>
      </View>

      <View style={actualPage == 'comment' ? styles.activeButtonContainer : styles.buttonContainer}>
        <NotificationSvg fill={actualPage == 'comment' ? '#FFF' : '#B2B2B2'}/>
      </View>
    </View>
  )
}; 

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 60,
    borderRadius: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 45,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  activeButtonContainer: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 8,

    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
  }
});