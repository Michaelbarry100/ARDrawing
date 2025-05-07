import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const getIconName = (iconType) => {
  switch (iconType) {
    case 'text': return 'text-box-outline';
    case 'camera': return 'camera-outline';
    case 'creation': return 'palette-outline';
    case 'heart': return 'heart-outline';
    default: return 'star-outline';
  }
};

const FeatureCard = ({ imageUri, title, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color }]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Image source={imageUri} style={{ width: 40, height: 40, resizeMode: 'contain' }} />

      </View>
      <Text style={styles.title}>{title}</Text>
      <Icon name="chevron-right" size={24} color="#fff" style={styles.arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    height: 100,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    position: 'relative'
  },
  iconContainer: {
    marginBottom: 12
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
  arrow: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});

export default FeatureCard;