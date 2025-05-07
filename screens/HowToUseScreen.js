import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HowToUseScreen = () => {
  const navigation = useNavigation();

  const steps = [
    {
      step: 'Step : 1',
      //image: require('../assets/step1.png'), // replace with your actual path
      description: 'Open the app and set your phone where you can comfortably see the drawing images.',
    },
    {
      step: 'Step : 2',
      //image: require('../assets/step2.png'), // replace with your actual path
      description: 'Select any image to draw.',
    },
    {
      step: 'Step : 3',
      //image: require('../assets/step3.png'), // add this image too
      description: 'Start tracing the image on the paper below your phone.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>How To Use</Text>

      {steps.map((item, index) => (
        <View key={index} style={styles.stepContainer}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepText}>{item.step}</Text>
          </View>
          <Image source={item.image} style={styles.image} resizeMode="contain" />
          <Text style={styles.description}>"{item.description}"</Text>
        </View>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  stepContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  stepBadge: {
    backgroundColor: '#A35BFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 8,
  },
  stepText: {
    color: '#fff',
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 12,
    color: '#333',
  },
});

export default HowToUseScreen;
