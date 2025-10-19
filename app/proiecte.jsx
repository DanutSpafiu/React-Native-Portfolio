import { StyleSheet, Text, View, Image, useColorScheme, Button, ScrollView } from 'react-native'
import Photo1 from '../assets/ecatedra1.png'
import Photo2 from '../assets/ecatedra2.png'
import Photo3 from '../assets/ecatedra3.png'
import Photo4 from '../assets/ecatedra4.png'
import React, { useState } from 'react'
import {Link, Stack} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'

const proiecte = () => {
      const colorScheme = useColorScheme();
      const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ScrollView>
    <ThemedView style={styles.container}>
      <Text style={[styles.title, {color: theme.title}]}>📚ecatedra.ro</Text>
      <Text style={[styles.text, {color: theme.title}]}>eCatedra.ro is a modern web application designed for teachers who offer private tutoring sessions.
It provides an intuitive and efficient way to organize students, manage lessons, analyze statistics and track income — all in one place.</Text>

    <Text style={[styles.subtitle, {color: theme.title}]}>✨ Features</Text>

    <Text style={[styles.subtitle, {color: theme.title}]}>👩‍🎓 Student Profiles</Text>
    <Text style={[styles.subtitleCompletion, {color: theme.title}]}>Create a dedicated profile for each student with personalized details and progress tracking.</Text>
    
    <Text style={[styles.subtitle, {color: theme.title}]}>👥 Group Management</Text>
    <Text style={[styles.subtitleCompletion, {color: theme.title}]}>Easily organize students into groups based on subjects, levels, or schedules.</Text>

    <Text style={[styles.subtitle, {color: theme.title}]}>📚 Course Materials</Text>
    <Text style={[styles.subtitleCompletion, {color: theme.title}]}>Upload and share course support files, assignments, and homework directly through the platform.</Text>

<Text style={[styles.subtitle, {color: theme.title}]}>📅 Session Reminders</Text>
    <Text style={[styles.subtitleCompletion, {color: theme.title}]}>Automatically send email notifications to remind students about upcoming sessions.</Text>
    
    <Text style={[styles.subtitle, {color: theme.title}]}>💰 Income Tracking</Text>
    <Text style={[styles.subtitleCompletion, {color: theme.title}]}>Keep a clear record of your tutoring earnings and visualize income trends over time.</Text>

    <Text style={[styles.subtitle, {color: theme.title}]}>📊 Statistics & Insights</Text>
    <Text style={[styles.subtitleCompletion, {color: theme.title}]}>View detailed statistics about your activity: number of sessions held, total hours taught, income evolution, and group performance summaries.</Text>

    <Text style={[styles.subtitle, {color: theme.title}]}>💡 Vision</Text>
    <Text style={[styles.subtitleCompletion, {color: theme.title}]}>eCatedra.ro aims to become the go-to digital assistant for private tutors — helping them stay organized, communicate efficiently with students, and manage their teaching business effortlessly.</Text>
    
    <Image
        source={Photo1}
        style={styles.img}
        />

         <Image
        source={Photo2}
        style={styles.img}
        />

         <Image
        source={Photo3}
        style={styles.img}
        />

         <Image
        source={Photo4}
        style={styles.img}
        />

    </ThemedView>
    </ScrollView>
  )
}

export default proiecte

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
    fontSize: 22,
    marginBottom: 0,
    textAlign: 'left',
    width: '100%',
    paddingLeft: 20,
    fontFamily: 'Inter'
  },
  img: {
    width: '90%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 5,
    alignItems: 'flex-start'
  },
   link: {
    padding: 5,
    fontFamily: 'Arial',
    borderBottomWidth: 1,
    marginTop:10
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
  subtitleCompletion: {
     paddingLeft: 10,
      textAlign: 'left',
    width: '100%',
    fontFamily: 'Inter',
    fontSize: 15
  },
  text: {
     paddingLeft: 10,
    paddingTop: 15,
    textAlign: 'left',
    width: '100%',
    fontFamily: 'Inter',
    fontSize: 15
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