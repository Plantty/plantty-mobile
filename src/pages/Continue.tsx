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

import NatureSvg from '../assets/nature-screen.svg';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Continue() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('Enter');        
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}> 
        <NatureSvg/>
        
        <Text style={styles.title}>
          Informações de uma {'\n'}
          forma simplificada  
        </Text>
        
        <Text style={styles.text}>
          Você verá as informações das plantas de forma simples
          e completa. Também pode deixar algum comentário na 
          planta para ajudar outras pessoas que não à conheçam!
        </Text>

        <PaginationDots
          active={1}
        />

        <Button 
          title='Continuar'
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