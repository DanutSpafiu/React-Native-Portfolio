import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>

      <Text style={styles.text}>Ce ar trebui sa stii despre mine?</Text>
      
      <Text style={styles.descriere}>Principalele mele pasiuni sunt mobile si web development.</Text>
      <Text style={styles.descriere}>.</Text>
      {/**
      <Link 
      style={styles.link}
      href="/">Home</Link>

      <Link 
      style={styles.link}
      href="/contact">Contact</Link>
       */}
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontStyle:'italic',
    fontSize: 18,
    padding: 10
  },
 link: {
    padding: 2,
    fontFamily: 'Arial',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  descriere: {
   fontFamily: 'Arial',
   fontSize: 13,
  }
})