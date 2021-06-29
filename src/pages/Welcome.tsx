import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  View
} from 'react-native';

import GardeningImage from '../assets/gardening.svg';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}> 
        <GardeningImage/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})