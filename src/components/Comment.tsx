import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function CommentCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Essa planta é muito legal!</Text>

      <View style={styles.date}>
        <Text style={styles.dateText}>12h30 - 02/04/2021</Text>
      </View>
    </View>
  )
}; 

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 80,
    borderRadius: 19,
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: 15,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    marginBottom: 60
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 18,
  },
  dateText: {
    fontFamily: fonts.text,
    color: colors.white,
    fontSize: 12,
  },
  date: {
    width: 130,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',

    top: 20
  }
});