import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryButton from '../components/CategoryButton';

const DrawingScreen = ({ navigation }) => {
  const categories = [
    { id: 1, name: 'Aesthetics', image: require('../assets/favicon.png'), color: '#3DC5FF' },
    { id: 2, name: 'Animals', image: require('../assets/favicon.png'), color: '#FFB648' },
    { id: 3, name: 'Anime', image: require('../assets/favicon.png'), color: '#CB89FC' },
    { id: 4, name: 'Cars', image: require('../assets/favicon.png'), color: '#5BDC5B' },
    { id: 5, name: 'Bakery', image: require('../assets/favicon.png'), color: '#FF7E7E' },
    { id: 6, name: 'Flower', image: require('../assets/favicon.png'), color: '#50B2FF' },
    { id: 7, name: 'Fruit', image: require('../assets/favicon.png'), color: '#FF6464' },
    { id: 8, name: 'Space', image: require('../assets/favicon.png'), color: '#D083C1' },
    { id: 9, name: 'Vegetable', image: require('../assets/favicon.png'), color: '#50D987' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Drawing</Text>
        <View style={{ width: 30 }}></View>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => {/* Handle Gallery selection */}}
        >
          <Icon name="image" size={24} color="#fff" />
          <Text style={styles.optionText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.optionButton, styles.purpleButton]}
          onPress={() => {/* Handle Camera selection */}}
        >
          <Icon name="camera" size={24} color="#fff" />
          <Text style={styles.optionText}>Camera</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.categoriesTitle}>Categories</Text>

      <ScrollView contentContainerStyle={styles.categoriesGrid}>
        {categories.map(category => (
          <CategoryButton 
            key={category.id}
            category={category}
            onPress={() => navigation.navigate('Category', { categoryName: category.name })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 24
  },
  optionButton: {
    backgroundColor: '#FFA62E',
    width: '48%',
    height: 60,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  purpleButton: {
    backgroundColor: '#8A56EB'
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    paddingHorizontal: 16,
    marginBottom: 16
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20
  }
});

export default DrawingScreen;