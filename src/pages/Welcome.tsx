import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/WelcomeButton';
import { PaginationDots } from '../components/PaginationDots';

import GardeningSvg from '../assets/gardening.svg';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('Continue');        
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}> 
        <GardeningSvg/>
        
        <Text style={styles.title}>
          Nós adoramos proteger {'\n'}
          o nosso planeta
        </Text>
        
        <Text style={styles.text}>
          Ajudamos você a fazer o seu jardim,
          reunindo as informações da flora do
          nosso planeta. Vamos pensar em 
          pequenas coisas que mudam o mundo!
        </Text>

        <PaginationDots
          active={0}
        />

        <Button 
          title='Começar'
          onPress={handleStart}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {  
    fontFamily: fonts.heading,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 15
  }, 
  text: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.text,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 75,
    marginBottom: 10
  }
});