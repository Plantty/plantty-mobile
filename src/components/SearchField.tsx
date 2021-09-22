  
import React from 'react';
import { 
  TextInput, 
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface searchProps {
  width: string;
}

export function SearchField({ width }: searchProps) {
  return (
    <TextInput
      style={{...styles.container, width: width}}
      placeholder='Nome da planta'
      maxLength={40}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: colors.gray,
    borderRadius: 10,
    fontFamily: fonts.text,
    fontSize: 16,
    marginRight: 14,
    paddingHorizontal: 16
  }
});