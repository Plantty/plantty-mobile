import React from 'react';
import { 
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor: string;
  width: number | string;
}

export function Button({ title, backgroundColor, width, ...rest }: ButtonProps ){
  return (
    <TouchableOpacity 
      style={{...styles.container, backgroundColor: backgroundColor, width: width }}
      activeOpacity={0.8}  
      {...rest}
    >
      <Text style={styles.text}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}; 

const styles = StyleSheet.create({
  container: {
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
  }
});