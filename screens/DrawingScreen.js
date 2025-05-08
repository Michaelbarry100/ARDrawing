import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryButton from '../components/CategoryButton';
import * as ImagePicker from 'expo-image-picker';

const DrawingScreen = ({ navigation, route }) => {
  const staticCategories = [
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

  const [categories, setCategories] = useState(staticCategories);

  // Request camera and gallery permissions
  const requestPermissions = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(cameraPermission.status, galleryPermission.status);
  };

  // Handle gallery selection
  const handleGallerySelection = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      console.log('Gallery Image:', result.uri);
      navigation.navigate('EditDrawing', { imageUri: result.uri });
    } else {
      console.log('User canceled gallery selection');
    }
  };

  // Handle camera selection
  const handleCameraSelection = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      console.log('Camera Image:', result.uri);
      navigation.navigate('EditDrawing', { imageUri: result.uri });
    } else {
      console.log('User canceled camera');
    }
  };

  useEffect(() => {
    if (route?.params?.categoriesFromHome) {
      setCategories(route.params.categoriesFromHome);
    }
    requestPermissions(); // Request permissions on component mount
  }, [route?.params?.categoriesFromHome]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Drawing</Text>
        <View style={{ width: 30 }} />
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={handleGallerySelection}
        >
          <Icon name="image" size={24} color="#fff" />
          <Text style={styles.optionText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.optionButton, styles.purpleButton]}
          onPress={handleCameraSelection}
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
            onPress={() => navigation.navigate('Category', { categoryName: category.name, items: category.items })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 40,
  },
  optionButton: {
    backgroundColor: '#8A56EB',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  purpleButton: {
    backgroundColor: '#6A39FF',
  },
  optionText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: '500',
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    marginBottom: 10,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default DrawingScreen;
