import { StyleSheet, Text, View, Image, useColorScheme, Button } from 'react-native'
import Logo from '../assets/poza.jpeg'
import React, { useState } from 'react'
import {Link, Stack} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'

const Home = () => {
  const colorScheme = useColorScheme();
 

  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>
      
      <Image 
      source={Logo}
      style={styles.img}
      />
     
     <Text style={[styles.title, {color: theme.text}]}>Salut, eu sunt Danut Spafiu!</Text>
    <Text style={[styles.subtitle, {color: theme.text}]}>Sunt student in anul 2 la Automatica si Calculatoare si sunt pasionat de mobile development.</Text>
    <Link href="/about" style={styles.link}>Despre mine</Link>
    </ThemedView>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom:20
  },
  img: {
    marginVertical: 20,
    width: 200,
    height: 300,
    borderRadius: 20,
  },
   link: {
    padding: 5,
    fontFamily: 'Arial',
    borderBottomWidth: 1,
    marginTop:10
  },
  subtitle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})