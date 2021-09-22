import React from 'react';
import { 
  Image,
  SafeAreaView, 
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Navbar } from '../components/Navbar';
import { SettingsButton } from '../components/SettingsButton';
import { PlantCard } from '../components/PlantCard';

import fonts from '../styles/fonts';
import userImage from '../assets/user.png';
import colors from '../styles/colors';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView> 
          <View style={styles.topMenu}>
            <View style={styles.userContainer}>
              <View style={styles.userImageContainer}>
                <Image source={userImage} style={styles.userImage}/>
              </View>
              <Text style={styles.userText}>Olá, {'\n'}Daniel!</Text>
            </View>
            <SettingsButton backPage='Home'/>
          </View>

          
          <View style={styles.sectionContainer}>
            <Text style={styles.title}>Recomendado</Text>
            <ScrollView horizontal={true}>
              <View style={styles.sectionPlants}>
                <PlantCard/>
                <PlantCard/>
                <PlantCard/>
              </View>
            </ScrollView>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.title}>Explore</Text>
            <ScrollView horizontal={true}>
              <View style={styles.sectionPlants}>
                <PlantCard/>
                <PlantCard/>
                <PlantCard/>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
          
        <Navbar />
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
    justifyContent: 'center',
    marginTop: 30
  },
  topMenu: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
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
  userText: {
    fontFamily: fonts.text,
    fontSize: 18
  },
  sectionContainer: {
    marginTop: 50,
    marginLeft: 25
  },
  sectionPlants: {
    flexDirection: 'row',
    paddingRight: 100,
    marginTop: 20
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24
  }
});