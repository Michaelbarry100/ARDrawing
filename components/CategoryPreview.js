import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryPreview = ({ category, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      disabled={category.locked}
    >
      <View style={styles.card}>
        <Image source={category.image} style={styles.image} />
        {category.locked && (
          <View style={styles.lockedOverlay}>
            <Icon name="lock" size={20} color="#fff" />
          </View>
        )}
      </View>
      <View style={styles.favoriteButton}>
        <Icon name="star-outline" size={16} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    width: 120,
    height: 120,
    position: 'relative'
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  lockedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#9966FF',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryPreview;