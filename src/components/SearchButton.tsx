import React from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import SearchSvg from '../assets/search.svg';

export function SearchButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <SearchSvg fill="#FFF"/>
    </TouchableOpacity>
  )
}; 

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.purple,
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});