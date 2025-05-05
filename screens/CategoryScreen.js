import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryScreen = ({ navigation, route }) => {
  const { categoryName } = route.params;
  
  // Mock data for category items
  const categoryItems = [
    { id: 1, image: require('../assets/favicon.png'), locked: false },
    { id: 2, image: require('../assets/favicon.png'), locked: false },
    { id: 3, image: require('../assets/favicon.png'), locked: true },
    { id: 4, image: require('../assets/favicon.png'), locked: true },
    { id: 5, image: require('../assets/favicon.png'), locked: false },
    { id: 6, image: require('../assets/favicon.png'), locked: true },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => !item.locked && navigation.navigate('Preview', { image: item.image, category: categoryName })}
      disabled={item.locked}
    >
      <View style={styles.itemImageContainer}>
        <Image source={item.image} style={styles.itemImage} />
        {item.locked && (
          <View style={styles.lockedOverlay}>
            <Icon name="lock" size={24} color="#fff" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
        <TouchableOpacity>
          <Icon name="magnify" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={categoryItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
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
  listContainer: {
    padding: 16
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden'
  },
  itemImageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  itemImage: {
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
  }
});

export default CategoryScreen;