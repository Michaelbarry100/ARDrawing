import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

const CategoryButton = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: category.color }]}
      onPress={onPress}
    >
      <Image source={category.image} style={styles.image} />
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 12,
    padding: 8,
    justifyContent: 'space-between'
  },
  image: {
    width: '80%',
    height: '70%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
  }
});

export default CategoryButton;
