  
import React from 'react';
import { 
  TextInput, 
  TextInputProps,
  StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function TextArea({...rest}: TextInputProps){
  return (
    <TextInput 
      style={styles.container}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.gray,
    borderRadius: 10,
    fontFamily: fonts.input,
    fontSize: 14,
    paddingHorizontal: 16
  }
});