import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'

const Contact = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>

      <Text style={[styles.text, {color: theme.text, padding:3}]}>Contact Page</Text>
      <Text style={[styles.text, {color: theme.text, padding:3}]}>Phone: +40 768 170 875</Text>
      <Text style={[styles.text, {color: theme.text, padding:3}]}>Email: spafiud@gmail.com</Text>
      <Text style={[styles.text, {color: theme.text, padding:3}]}>LinkedIn: Danut Spafiu</Text>
      

      <Link 
      style={styles.link}
      href="/">Home</Link>

    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  text: {
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10
  },
 link: {
    marginTop: 20,
    fontFamily: 'Arial',
    borderBottomWidth: 1
  },
  contact: {
    padding: 2,
    fontFamily: 'Arial',
    
  }
})