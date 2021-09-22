import React from 'react';
import { 
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';

import HomeSvg from '../assets/home.svg';
import SearchSvg from '../assets/search.svg';
import CommentSvg from '../assets/comment.svg';

interface routeParamsProps {
  actualPage: string;
}

export function Navbar() {
  const route = useRoute();
  const navigation = useNavigation();

  const { actualPage } = route.params as routeParamsProps;

  function handleHome() {
    navigation.navigate('Home', { actualPage: 'home'});        
  }

  function handleSearch() {
    navigation.navigate('Search', { actualPage: 'search'});        
  }

  function handleComment() {
    navigation.navigate('Comment', { actualPage: 'comment'});        
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHome}>
        <View style={actualPage === 'home' ? styles.activeButtonContainer : styles.buttonContainer}>
          <HomeSvg fill={actualPage === 'home' ? '#FFF' : '#B2B2B2'}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSearch}>
        <View style={actualPage === 'search' ? styles.activeButtonContainer : styles.buttonContainer}>
          <SearchSvg fill={actualPage === 'search' ? '#FFF' : '#B2B2B2'}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleComment}>
        <View style={actualPage === 'comment' ? styles.activeButtonContainer : styles.buttonContainer}>
          <CommentSvg fill={actualPage === 'comment' ? '#FFF' : '#B2B2B2'}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}; 

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    top: '85%',
    marginLeft: '5%',
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