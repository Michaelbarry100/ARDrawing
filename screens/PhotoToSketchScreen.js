import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PhotoToSketchScreen = ({ navigation }) => {
  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (cameraStatus.status !== 'granted' || mediaStatus.status !== 'granted') {
        Alert.alert('Permission required', 'Please enable camera and media library permissions.');
      }
    })();
  }, []);

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageSource({ uri: result.assets[0].uri });
    }
  };

  const takePhotoWithCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      saveToPhotos: true,
    });

    if (!result.canceled) {
      setImageSource({ uri: result.assets[0].uri });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Photo To Sketch</Text>
        <View style={{ width: 30 }} />
      </View>

      <View style={styles.imagePreview}>
        {imageSource ? (
          <Image source={imageSource} style={styles.previewImage} />
        ) : (
          <Text style={{ color: '#999' }}>No Image Selected</Text>
        )}
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={pickImageFromGallery}>
          <Icon name="image" size={24} color="#fff" />
          <Text style={styles.optionText}>Image From Gallery</Text>
          <Text style={styles.optionDescription}>
            Select an image to start sketching.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionButton, styles.optionOrange]} onPress={takePhotoWithCamera}>
          <Icon name="camera" size={24} color="#fff" />
          <Text style={styles.optionText}>Image From Camera</Text>
          <Text style={styles.optionDescription}>
            Take a new photo to start sketching.
          </Text>
        </TouchableOpacity>
      </View>
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
  imagePreview: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  optionsContainer: {
    padding: 16,
    gap: 16
  },
  optionButton: {
    backgroundColor: '#8A56EB',
    borderRadius: 12,
    padding: 16
  },
  optionOrange: {
    backgroundColor: '#FF9D42'
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4
  },
  optionDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14
  }
});

export default PhotoToSketchScreen;