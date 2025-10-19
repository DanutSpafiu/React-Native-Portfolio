import { StyleSheet, Text, View, Image, useColorScheme, Button } from 'react-native'
import Logo from '../assets/pozaVenetia.jpeg'
import React, { useState } from 'react'
import {Link, Stack} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'
import pozaSala1 from '../assets/gym1.jpeg'
import pozaSala2 from '../assets/gym2.jpeg'

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={styles.container}>
      
      <Image
      source={Logo}
      style={styles.img}
      />
     
     <Text style={[styles.title, {color: theme.title}]}>Salut, sunt Danut Spafiu!</Text>
    <Text style={styles.subtitle}>Sunt student in anul 2 la Facultatea de Automatica si Calculatoare si sunt pasionat de web si mobile development.</Text>
    <Text style={styles.text}>Dar povestesc mai multe aici:</Text>
    <Text style={styles.text}>⬇</Text>


    <Link 
      href="/about"
      style={styles.buttonContainer}
      asChild
    ><Text style={styles.buttonText}>Despre mine</Text>
    </Link>

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
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom:20,
    fontStyle: 'italic',
    fontFamily: 'Inter'
  },
  img: {
    marginVertical: 20,
    width: 200,
    height: 300,
    borderRadius: 100
  },
   link: {
    padding: 5,
    borderBottomWidth: 1,
    marginTop:10
  },
  subtitle: {
    fontFamily: 'Inter',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14.5,
    textAlign: 'center',
    paddingHorizontal: 40
  },
  text: {
    paddingTop: 12,
    fontFamily: 'Inter',
    paddingBottom: 0
  },
 buttonContainer: {
  paddingHorizontal: 30,
  paddingVertical: 1,
  borderRadius: 8,
  marginTop: 30,
},
  buttonText: {
  fontWeight: '600',
  fontSize: 16,
  textDecorationLine: 'underline',
  fontFamily: 'Inter',
  paddingTop: 0
  }
})