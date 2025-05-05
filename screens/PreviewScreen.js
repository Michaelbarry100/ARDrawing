import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PreviewScreen = ({ navigation, route }) => {
  const { image, category, text, fontSize, fontId } = route.params;
  const [selectedEffect, setSelectedEffect] = useState('original');
  
  const effects = [
    { id: 'original', name: 'Original' },
    { id: 'sketch', name: 'Sketch' },
    { id: 'pencil', name: 'Pencil' },
    { id: 'watercolor', name: 'Watercolor' },
    { id: 'cartoon', name: 'Cartoon' },
  ];

  // Simulated image with effect applied
  const getImageWithEffect = () => {
    // In a real app, this would apply different effects to the image
    return image;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Preview</Text>
        <TouchableOpacity>
          <Icon name="share-variant" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.previewContainer}>
        {text ? (
          <View style={styles.textPreview}>
            <Text style={[styles.previewText, { fontSize: fontSize }]}>
              {text}
            </Text>
          </View>
        ) : (
          <Image source={getImageWithEffect()} style={styles.previewImage} />
        )}
      </View>
      
      <View style={styles.effectsContainer}>
        <Text style={styles.effectsTitle}>Effects</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {effects.map(effect => (
            <TouchableOpacity
              key={effect.id}
              style={[
                styles.effectButton,
                selectedEffect === effect.id && styles.selectedEffect
              ]}
              onPress={() => setSelectedEffect(effect.id)}
            >
              <Text style={[
                styles.effectButtonText,
                selectedEffect === effect.id && styles.selectedEffectText
              ]}>
                {effect.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="star-outline" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Save</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.primaryActionButton]}
          onPress={() => navigation.navigate('ARDrawingCanvas', { image: getImageWithEffect() })}
        >
          <Icon name="cube-outline" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Draw in AR</Text>
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
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  previewImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain'
  },
  textPreview: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16
  },
  previewText: {
    textAlign: 'center',
    color: '#333'
  },
  effectsContainer: {
    padding: 16
  },
  effectsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333'
  },
  effectButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 12
  },
  selectedEffect: {
    backgroundColor: '#8A56EB'
  },
  effectButtonText: {
    color: '#333',
    fontSize: 14
  },
  selectedEffectText: {
    color: '#fff'
  },
  actionsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 16
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    padding: 16,
    borderRadius: 12,
    gap: 8
  },
  primaryActionButton: {
    backgroundColor: '#8A56EB'
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default PreviewScreen;