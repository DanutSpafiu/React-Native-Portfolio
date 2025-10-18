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

      <Text style={[styles.text, {color: theme.text}]}>Ce ar trebui sa stii despre mine?</Text>
      
      <Link 
            href="/educatie"
            style={styles.buttonContainer}
            asChild
          ><Text style={styles.buttonText}>Educatie</Text>
          </Link>

          <Link 
            href="/proiecte"
            style={styles.buttonContainer}
            asChild
          ><Text style={styles.buttonText}>Proiecte Personale</Text>
          </Link>
         
            <Link 
            href="/pasiuni"
            style={styles.buttonContainer}
            asChild
          ><Text style={styles.buttonText}>Pasiuni</Text>
          </Link>

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
    justifyContent: 'center',

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
   padding: 5,
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