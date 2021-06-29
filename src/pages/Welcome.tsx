import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  View,
  Text
} from 'react-native';

import fonts from '../styles/fonts';

import { Button } from '../components/Button';
import GardeningSvg from '../assets/gardening.svg';

export function Welcome() {
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
          pequenas coisas que mudam {'\n'}
          o mundo!
        </Text>

        <Button title='Iniciar'/>
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
    marginTop: 12,
    marginBottom: 10
  }, 
  text: {
    fontFamily: fonts.text,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 60,
    marginBottom: 100
  }
})