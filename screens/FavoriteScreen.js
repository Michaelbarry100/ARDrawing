import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoriteScreen = ({ navigation }) => {
  // Mock data for favorites
  const favorites = [
    { id: 1, image: require('../assets/favicon.png'), category: 'Aesthetics' },
    { id: 2, image: require('../assets/favicon.png'), category: 'Animals' },
    { id: 3, image: require('../assets/favicon.png'), category: 'Anime' },
    { id: 4, image: require('../assets/favicon.png'), category: 'Cars' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.favoriteItem}
      onPress={() => navigation.navigate('Preview', { image: item.image, category: item.category })}
    >
      <Image source={item.image} style={styles.favoriteImage} />
      <View style={styles.favoriteDetails}>
        <Text style={styles.favoriteCategory}>{item.category}</Text>
        <TouchableOpacity style={styles.favoriteButton}>
          <Icon name="heart" size={20} color="#FF4D4D" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Favorites</Text>
        <View style={{ width: 30 }}></View>
      </View>
      
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.favoritesGrid}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Icon name="heart-outline" size={60} color="#DDD" />
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.emptySubtext}>Your favorite items will appear here</Text>
        </View>
      )}
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
  favoritesGrid: {
    padding: 16
  },
  favoriteItem: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden'
  },
  favoriteImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  favoriteDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5'
  },
  favoriteCategory: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500'
  },
  favoriteButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    textAlign: 'center'
  }
});

export default FavoriteScreen;