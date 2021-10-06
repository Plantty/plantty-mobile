import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  View,
  Text
} from 'react-native';

import { SearchField } from '../components/SearchField';
import { SearchButton } from '../components/SearchButton';
import { PlantCardHorizontal } from '../components/PlantCardHorizontal';
import { Navbar } from '../components/Navbar';

import fonts from '../styles/fonts';

export function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <SearchField width='75%'/>
          <SearchButton/>
        </View>

        <View style={styles.mostSearched}>
          <Text style={styles.title}>Mais procurados</Text>

          <PlantCardHorizontal backPage='Search'/>
          <PlantCardHorizontal backPage='Search'/>
        </View>

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
    marginTop: 40
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
  },
  mostSearched: {
    marginTop: 55,
    width: '100%',
    marginHorizontal: 30
  },
});