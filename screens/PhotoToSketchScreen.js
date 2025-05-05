import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PhotoToSketchScreen = ({ navigation }) => {
  // Mock data for the example image
  const [imageSource, setImageSource] = useState(require('../assets/favicon.png'));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Photo To Sketch</Text>
        <View style={{ width: 30 }}></View>
      </View>

      <View style={styles.imagePreview}>
        <Image source={imageSource} style={styles.previewImage} />
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Icon name="image" size={24} color="#fff" />
          <Text style={styles.optionText}>Image From Gallery</Text>
          <Text style={styles.optionDescription}>
            To start drawing, just pick up a pencil and let your lines flow.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionButton, styles.optionOrange]}>
          <Icon name="camera" size={24} color="#fff" />
          <Text style={styles.optionText}>Image From Camera</Text>
          <Text style={styles.optionDescription}>
            To start drawing, just pick up a pencil and let your lines flow.
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