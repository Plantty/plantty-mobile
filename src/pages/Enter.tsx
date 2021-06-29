import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Button } from '../components/Button';

import DoneSvg from '../assets/done.svg';
import fonts from '../styles/fonts';

export function Enter() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}> 
        <DoneSvg/>
        
        <Text style={styles.title}> Estamos Preparados! </Text>
        
        <Text style={styles.text}>
          Você verá as informações das plantas de forma simples
          e completa. Também pode deixar algum comentário na 
          planta para ajudar outras pessoas que não à conheçam!
        </Text>

        <Button 
          title='Entrar'
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
    marginTop: 12,
    marginBottom: 10
  }, 
  text: {
    fontFamily: fonts.text,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 80,
    marginBottom: 100
  }
})