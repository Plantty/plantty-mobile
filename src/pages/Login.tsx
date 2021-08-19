import React from 'react';
import { 
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView, 
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/FormButton';
import { TextArea } from '../components/TextArea';

import PlantSvg from '../assets/plant.svg';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Login() {
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate('RegisterContinue');        
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

                <Text style={styles.forgotText}>Esqueceu a senha?</Text>
              </View>
            </View>

            <Button
              title='Entrar'
            />

            <View style={styles.registerContainer}>
              <Text style={styles.accountText}>Não possui uma conta? </Text>
              <Text 
                style={styles.registerText}
                onPress={handleRegister}
              >
                Registre-se
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
    marginBottom: 40
  },
  label: {  
    fontFamily: fonts.heading,
    fontSize: 16,
    marginBottom: 10
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30
  },
  formGroup: {
    width: '80%',
    marginTop: 13,
    alignItems: 'flex-start'
  },
  forgotText: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.purple,
    marginTop: 13
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60
  },
  accountText: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.text,
    lineHeight: 20
  },
  registerText: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.purple,
    lineHeight: 20
  }
});