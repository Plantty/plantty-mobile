import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';
import { PaginationDots } from '../components/PaginationDots';

import DoneSvg from '../assets/done.svg';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Enter() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('Login');        
  }

  function handleRegister() {
    navigation.navigate('RegisterContinue');        
  }

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

        <View style={styles.dots}>
          <PaginationDots
            active={2}
          /> 
        </View>

        <Button 
          title='Entrar'
          backgroundColor='#4C35E4'
          width={270}
          onPress={handleStart}
        />

        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}  
          onPress={handleRegister}
        >
          <Text style={styles.textButton}>
            Registrar
          </Text>
        </TouchableOpacity>
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
    marginTop: 50,
    marginBottom: 10
  }, 
  text: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.text,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 80,
    marginBottom: 10
  },
  dots: {
    marginBottom: 50
  },
  button: {
    backgroundColor: colors.white,

    width: 270,
    height: 58,
    borderRadius: 16,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textButton: {
    fontSize: 16,
    fontFamily: fonts.heading
  }
});