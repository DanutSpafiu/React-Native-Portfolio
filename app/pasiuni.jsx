import { StyleSheet, Text, View, Image, useColorScheme, Button, ScrollView, Dimensions } from 'react-native'
import pozaSala1 from '../assets/gym1.jpeg'
import pozaSala2 from '../assets/gym2.jpeg'
import React, { useState } from 'react'
import {Link, Stack} from 'expo-router'
import { Colors } from '../constants/colors'
import ThemedView from '../components/ThemedView'
const images = [
  pozaSala1,
  pozaSala2
]
  
 

const pasiuni = () => {
      const {width} = Dimensions.get('window');
      const height = 500;
      const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== active) {
          setActive(slide);
        }
      }

      const colorScheme = useColorScheme();
      const theme = Colors[colorScheme] ?? Colors.light
  return (
        <ScrollView>
    <ThemedView style={styles.container}>

     <Text style={[styles.title, {color: theme.title}]}>🏋🏻‍♂️ Gym & Fitness</Text>
           <Text style={[styles.subtitle, {color: theme.title}]}>🔋🎧 De la o varsta frageda practic 
            <Text style={{fontWeight: 'bold', fontFamily: 'Inter'}}> calisthenics </Text>
            in mod amator, iar de aproximativ un an merg la sala de fitness.</Text>

           <Text style={[styles.subtitle, {color: theme.title}]}>🧠 Am invatat foarte multe din aceasta activitate, precum faptul ca 
             <Text style={{fontWeight: 'bold', fontFamily: 'Inter'}}> nimic nu functioneaza fara consistenta. </Text>
            Degeaba dai randament 100% la un antrenament, daca vei renunta exact dupa.</Text>
           <Text style={[styles.subtitle, {color: theme.title}]}>🔥 O alta lectie pe care am desprins-o este ca 
             <Text style={{fontWeight: 'bold', fontFamily: 'Inter'}}> nu poti obtine nimic doar din noroc si fara munca. </Text>
             Cel mai bun exemplu mi se pare urmatorul: tipul ala cu patratele pe care il vezi mereu in sala nu le-a obtinut 
              <Text style={{fontWeight: 'bold', fontFamily: 'Inter'}}> "din greseala." </Text>
              In spatele acelor patratele exista un program de antrenamente strict, un regim alimentar si mai strict si o determinare de fier.</Text>

           <ScrollView
           pagingEnabled
           horizontal
           onScroll={change}
           scrollEventThrottle={16}
           showsHorizontalScrollIndicator={false}
           style={{width, height, marginTop:20}}
           >
            {images.map( (image, index) => (
              <Image 
                key={index}
                source={image}
                style={[styles.img, {width: width, height: height, marginHorizontal: 0, borderRadius: 0}]}
              />
            ))}
           </ScrollView>
           <View style={styles.pagination}>
                    {images.map((i, k) => (
                        <Text key={k} style={k === active ? styles.pagingActiveText : styles.pagingText}>
                            ⬤
                        </Text>
                    ))}
                </View>
    </ThemedView>
     </ScrollView>
  )
}

export default pasiuni

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
    fontSize: 25,
    marginBottom: 0,
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
    paddingBottom: 10,
    fontFamily: 'Inter'
  },
  pagination: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagingText: {
        fontSize: 12,
        color: '#888',
        marginHorizontal: 4,
    },
    pagingActiveText: {
        fontSize: 12,
        color: 'dodgerblue',
        marginHorizontal: 4,
    },
  img: {
    paddingTop: 20,
    width: '90%',
    height: 450,
    resizeMode: 'auto',
    marginVertical: 5,
    alignItems: 'flex-start',
    borderRadius: 20
  },
   link: {
    padding: 5,
    fontFamily: 'Arial',
    borderBottomWidth: 1,
    marginTop:10
  },
  subtitle: {
    lineHeight: 24,
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