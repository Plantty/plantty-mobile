import React from 'react';
import { 
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import plantImage from '../assets/plant.png';
interface PlantCardProps {
  backPage: string;
}

export function PlantCard({ backPage }: PlantCardProps) {
  const navigation = useNavigation();

  function handlePlantDetails() {
    navigation.navigate('Plant', {backPage: backPage});        
  }

  return (
    <TouchableOpacity onPress={handlePlantDetails}>
      <View style={styles.container}>
        <Image source={plantImage} style={styles.plantImage}/>
          <LinearGradient
            colors={['#000', 'transparent']}
            style={styles.informationContainer}
          >
            <Text style={styles.plantTitle}>Bromélia</Text>
            <Text style={styles.plantSubtitle}>Bromeliaceae</Text>
          </LinearGradient>
      </View>
    </TouchableOpacity>
  )
}; 

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 180,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 24
  },
  plantImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 16
  },
  informationContainer: {
    position: 'absolute',
    paddingLeft: 18,
    paddingTop: 8,
    width: 190,
    height: 45,
    top: 120
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