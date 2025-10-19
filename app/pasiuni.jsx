import { StyleSheet, Text, View, Image, useColorScheme, Button } from 'react-native'
import Logo from '../assets/pozaVenetia.jpeg'
import React, { useState } from 'react'
import {Link, Stack} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'

const pasiuni = () => {
      const colorScheme = useColorScheme();
      const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>
     
    </ThemedView>
  )
}

export default pasiuni

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom:20
  },
  img: {
    marginVertical: 20,
    width: 200,
    height: 300,
    borderRadius: 100
  },
   link: {
    padding: 5,
    fontFamily: 'Arial',
    borderBottomWidth: 1,
    marginTop:10
  },
  subtitle: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13.5,
    textAlign: 'center',
    paddingHorizontal: 40
  },
  text: {
    paddingTop: 12
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
  fontFamily: 'Arial',
  paddingTop: 0
  }
})