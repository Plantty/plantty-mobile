import React from 'react';
import { 
  Image,
  SafeAreaView, 
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import userImage from '../assets/user.png';


interface routeParamsProps {
  backPage: string;
}

export function Settings() {
  const route = useRoute();
  const navigation = useNavigation();

  const { backPage } = route.params as routeParamsProps;

  function handleBackPage() {
    navigation.navigate(backPage);        
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
            <Feather 
              name="chevron-left"
              style={styles.chevron}
              onPress={handleBackPage}
            /> 
            <Text style={styles.title}>Configurações</Text>
        </View>

        <View style={styles.topMenu}>
          <View style={styles.userContainer}>
            <View style={styles.userImageContainer}>
              <Image source={userImage} style={styles.userImage}/>
            </View>

            <View style={styles.userInformations}>
              <Text style={styles.userName}>Daniel Benício</Text>
              <Text style={styles.userDate}>00/00/0000 - 00h00</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title='Alterar senha'
            backgroundColor='#4C35E4'
            width={350}
          />

          <Button
            title='Deletar conta'
            backgroundColor='#EA3535'
            width={350}
          />
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
    marginTop: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chevron: {
    fontSize: 20,
    position: 'absolute',
    right: '87%'
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    position: 'relative'
  },
  topMenu: {
    marginHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60
  },
  userImageContainer: {
    borderColor: colors.green,
    borderWidth: 2,
    borderRadius: 12,
    marginRight: 12
  },
  userImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 8,
    margin: 3
  },
  userInformations: {
    flexDirection: 'column'
  },
  userName: {
    fontFamily: fonts.heading,
    fontSize: 18
  },
  userDate: {
    fontFamily: fonts.text,
    fontSize: 16,
    opacity: 0.5
  },
  buttonsContainer: {
    height: 140,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});