import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Navbar } from '../components/Navbar';
import { SettingsButton } from '../components/SettingsButton';
import { CommentCard } from '../components/Comment';

import fonts from '../styles/fonts';

export function Comment() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Seus comentários</Text>
          <SettingsButton backPage='Comment'/>
        </View>

        <View style={styles.commentContainer}>
          <CommentCard />
          <CommentCard />
          <CommentCard />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%'
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24
  },
  commentContainer: {
    marginTop: 50,
    alignItems: 'center'
  }
});