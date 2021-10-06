import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface plantInformationsProps {
  Icon: any;
}

export function PlantInformations({ Icon }: plantInformationsProps) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon}/>
      <View>
        <Text style={styles.text}>Origem</Text>
        <Text style={styles.lightText}>lorem</Text>
      </View>
    </View>
  )
}; 

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: colors.white
  },
  icon: {
    marginHorizontal: 20
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 14
  },
  lightText: {
    fontFamily: fonts.text,
    fontSize: 12,
    color: colors.text
  }
});