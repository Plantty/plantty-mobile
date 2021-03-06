import React from 'react';
import { 
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView, 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/FormButton';
import { TextArea } from '../components/TextArea';

import PlantSvg from '../assets/plantNavBar.svg';
import ArrowSvg from '../assets/navBackArrow.svg';
import UploadImageSvg from '../assets/uploadImage.svg';
import fonts from '../styles/fonts';

export function Register() {
  const navigation = useNavigation();

  function handleNavBack() {
    navigation.navigate('RegisterContinue');        
  }

  function handleNavToLogin() {
    navigation.navigate('Login');        
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}> 
            <View style={styles.navBar}>
            <TouchableOpacity onPress={handleNavBack}>
              <ArrowSvg/>
            </TouchableOpacity>

              <Text style={styles.title}>Plantty</Text>

              <PlantSvg/>
            </View>
        
            <View style={styles.uploadImgContent}>
              <UploadImageSvg/>

              <Text style={styles.uploadImgText}>Sua foto</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Nome</Text>

                <TextArea 
                  placeholder='Digite seu nome'
                  maxLength={60}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Data de nascimento</Text>

                <TextArea 
                  placeholder='dd/mm/yyyy'
                  maxLength={30}
                  secureTextEntry
                />
              </View>
            </View>

            <Button
              onPress={handleNavToLogin}
              title='Registrar'
            />
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
  navBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {  
    fontFamily: fonts.heading,
    fontSize: 24
  },
  uploadImgContent: {
    alignItems: 'center',
    marginTop: 45
  },
  uploadImgText: {
    fontFamily: fonts.heading,
    fontSize: 18,
    marginTop: 15
  },
  label: {  
    fontFamily: fonts.heading,
    fontSize: 16,
    marginBottom: 10
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 35,
    marginTop: 20
  },
  formGroup: {
    width: '80%',
    marginTop: 20,
    alignItems: 'flex-start'
  }
});