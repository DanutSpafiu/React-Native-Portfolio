import { Button, StyleSheet, Text, View, useColorScheme, Linking } from 'react-native'
import React, {useCallback} from 'react'
import {Link} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'

const supportedURL = 'https://www.linkedin.com/in/danut-spafiu-051398331/';


const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Contact = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>

      <Text style={[styles.text, {color: theme.text, paddingBottom:8, fontSize:22}]}>😃 Ma gasesti aici:</Text>
      <Text style={[styles.text, {color: theme.text, padding:5}]}>Phone: +40 768 170 875</Text>
      <Text style={[styles.text, {color: theme.text, padding:5}]}>Email: spafiud@gmail.com</Text>
      <View style={[styles.contactRow]}>
    <Text style={[styles.text, {color: theme.text}]}>
        LinkedIn:
    </Text>
    <OpenURLButton url={supportedURL}>Danut Spafiu</OpenURLButton>
</View>
      

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
    contactRow: {
        flexDirection: 'row', // Aligns children (Text and OpenURLButton) side-by-side
        alignItems: 'center', // Vertically centers them (important for button/text alignment)
        // You might need to adjust padding/margins here instead of on the parent View
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