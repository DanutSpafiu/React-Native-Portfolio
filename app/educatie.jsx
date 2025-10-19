import { StyleSheet, Text, View, Image, useColorScheme, Button } from 'react-native'
import Logo from '../assets/pozaVenetia.jpeg'
import React, { useState } from 'react'
import {Link, Stack} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'

const Educatie = () => {
      const colorScheme = useColorScheme();
      const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>
     <Text style={[styles.title, {color: theme.title}]}>Universitatea Politehnica Timisoara</Text>
        <Text style={styles.text}>Facultatea de Automatica si Calculatoare</Text>
        <Text style={styles.subtitle}>2024 - prezent</Text>
        <Text style={styles.description}>Am fost admis la facultatea de Automatica si Calculatoare din cadrul Univeristatii
            Politehnica Timisoara cu media 9.94 la specializarea Informatica. In prezent sunt in anul 2 si imi continui
            studiile pentru a deveni un developer cat mai bun.
        </Text>

         <Text style={[styles.title, {color: theme.title}]}>Liceul Teoretic Novaci</Text>
        <Text style={styles.text}>Matematica-informatica, informatica-intensiv</Text>
        <Text style={styles.subtitle}>2020 - 2024</Text>
        <Text style={styles.description}>Mi-am dezvoltat gândirea logică și abilitățile de problem-solving prin rezolvarea unor exerciții dificile, cum ar fi puzzle-uri algoritmice, exerciții de programare dinamică și subiecte avansate de matematică și structuri de date.
        </Text>
    </ThemedView>
  )
}

export default Educatie

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  title: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
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
    padding: 12,
    fontSize: 17,
    fontStyle: 'italic',
    fontFamily: 'Times New Roman'
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
  },
  subtitle: {
    color: 'gray'
  },
  description: {
    paddingTop: 10,
    paddingBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 40,
    fontFamily: 'Inter'
  }
})