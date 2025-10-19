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

      <Text style={[styles.text, {color: theme.text, paddingBottom:8, fontSize:22}]}>😃 Ma gasesti aici:</Text>
      <Text style={[styles.text, {color: theme.text, padding:5}]}>Phone: +40 768 170 875</Text>
      <Text style={[styles.text, {color: theme.text, padding:5}]}>Email: spafiud@gmail.com</Text>
      <Text style={[styles.text, {color: theme.text, padding:5}]}>LinkedIn: Danut Spafiu</Text>
      

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
  subtitle: {
    paddingLeft: 10,
    paddingTop: 15,
    textAlign: 'left',
    width: '100%',
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '500'
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