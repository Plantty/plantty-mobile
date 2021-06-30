import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dots from 'react-native-dots-pagination';

import colors from '../styles/colors';

interface PaginationDotsProps {
  active: number;
}

export function PaginationDots({ active }: PaginationDotsProps) {
  return (
    <View style={styles.pagination}>
      <Dots
        length={2}
        active={active}
        activeColor={colors.green}
        activeDotWidth={15}
        marginHorizontal={3}
      />  
    </View>
  )
}

const styles = StyleSheet.create({
  pagination: {
    height: 15,
    marginBottom: 50
  }
});