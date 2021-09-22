import React from 'react';
import { 
  Image,
  Text,
  StyleSheet,
  View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import plantImage from '../assets/plantHorizontal.png';

export function PlantCardHorizontal() {
  return (
    <View style={styles.container}>
      <Image source={plantImage} style={styles.plantImage}/>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.informationContainer}
        >
          <Text style={styles.plantTitle}>Bromélia</Text>
          <Text style={styles.plantSubtitle}>Bromeliaceae</Text>
        </LinearGradient>
    </View>
  )
}; 

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 120,
    borderRadius: 16,
    marginTop: 45
  },
  plantImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 16
  },
  informationContainer: {
    position: 'absolute',
    paddingLeft: 18,
    paddingTop: 8,
    width: '100%',
    height: '50%',
    top: 50
  },
  plantTitle: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 20
  },
  plantSubtitle: {
    color: colors.white,
    fontFamily: fonts.text,
    fontSize: 14,
    paddingLeft: 1
  }
});