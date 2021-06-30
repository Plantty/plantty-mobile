import React from 'react';
import { 
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps ){
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.8}  
      {...rest}
    >
      <Text style={styles.text}>
        { title }
      </Text>

      <Feather 
        name="chevron-right"
        style={styles.arrow}
      />    
    </TouchableOpacity>
  )
}; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    width: 270,
    height: 58,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  },
  arrow: {
    fontSize: 16,
    color: colors.white,
    position: 'absolute',
    left: '85%'
  }
});