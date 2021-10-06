import React from 'react';
import { 
  Image,
  SafeAreaView, 
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';

import { Button } from '../components/Button';
import { PlantInformations } from '../components/PlantInformations';

import CommentButton from '../assets/commentButton.svg';
import LocationSvg from '../assets/location.svg';
import SunSvg from '../assets/sun.svg';
import MountainSvg from '../assets/mountain.svg';
import GenderSvg from '../assets/gender.svg';
import sakuraImage from '../assets/sakura.png';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

interface routeParamsProps {
  backPage: string;
}

export function Plant() {
  const route = useRoute();
  const navigation = useNavigation();

  const { backPage } = route.params as routeParamsProps;

  function handleBackPage() {
    navigation.navigate(backPage);        
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={sakuraImage} style={styles.image}/>

        <TouchableOpacity onPress={handleBackPage}>
          <View style={styles.backButton}>
            <Feather 
              name="chevron-left"
              style={styles.chevron}
            /> 
          </View>
        </TouchableOpacity>

        <View style={styles.plantsDetailContainer}>
          <View style={styles.plantsDetailText}>
            <Text style={styles.title}>Sakura</Text>
            <Text style={styles.lightText}>Bromeliaceae</Text>
          </View>

          <View style={styles.informationsContainer}>
            <Text style={styles.text}>Informações</Text>
            <CommentButton />
          </View>

          <View style={styles.informationsContent}>
            <PlantInformations Icon={LocationSvg}/>
            <PlantInformations Icon={SunSvg}/>
            <PlantInformations Icon={MountainSvg}/>
            <PlantInformations Icon={GenderSvg}/>
          </View>

          <Button
            title='Leia mais'
            backgroundColor='#4C35E4'
            width={'80%'}
          />
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '40%'
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    top: '100%',
    left: '5%',
    backgroundColor: colors.white
  },
  chevron: {
    fontSize: 20,
  },
  plantsDetailContainer: {
    top: '25%',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  },
  plantsDetailText: {
    width: '80%',
    marginTop: 35,
    marginBottom: 12
  },
  informationsContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 30
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 16
  },
  lightText: {
    fontFamily: fonts.text,
    fontSize: 20,
    color: colors.text
  },
  informationsContent: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25
  }
});