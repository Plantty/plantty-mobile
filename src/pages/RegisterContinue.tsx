import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/FormButton';
import { TextArea } from '../components/TextArea';

import PlantSvg from '../assets/plant.svg';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function RegisterContinue() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('Login');        
  }

  function handleRegister() {
    navigation.navigate('Register');        
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}> 
        <PlantSvg/>
        
        <Text style={styles.title}>Bem vindo ao Plantty!</Text>
        
        <Text style={styles.subtitle}>Viva ao planeta</Text>

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>E-mail</Text>

            <TextArea 
              placeholder='Digite seu e-mail'
              maxLength={60}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Senha</Text>

            <TextArea 
              placeholder='Digite sua senha'
              maxLength={30}
              secureTextEntry
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Confirmar senha</Text>

            <TextArea 
              placeholder='Digite sua senha'
              maxLength={30}
              secureTextEntry
            />
          </View>
        </View>

        <Button
          title='Continuar'
          onPress={handleRegister}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.accountText}>Tem uma conta? </Text>
          <Text 
            style={styles.loginText}
            onPress={handleLogin}
          >
            Login
          </Text>
        </View>
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
    marginTop: 30,
    marginBottom: 10
  }, 
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 25
  },
  label: {  
    fontFamily: fonts.heading,
    fontSize: 16,
    marginBottom: 10
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 35
  },
  formGroup: {
    width: '80%',
    marginTop: 13,
    alignItems: 'flex-start'
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40
  },
  accountText: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.text,
    lineHeight: 20
  },
  loginText: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.purple,
    lineHeight: 20
  }
});