import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatureCard from '../components/FeatureCard';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const categories = [
    {
      id: 1,
      name: 'Aesthetics',
      items: [
        { id: 1, image: require('../assets/favicon.png'), locked: false },
        { id: 2, image: require('../assets/favicon.png'), locked: false },
        { id: 3, image: require('../assets/favicon.png'), locked: false },
        { id: 4, image: require('../assets/favicon.png'), locked: false },
        { id: 5, image: require('../assets/favicon.png'), locked: false },
        { id: 6, image: require('../assets/favicon.png'), locked: false },
      ],
    },
    {
      id: 2,
      name: 'Animals',
      items: [
        { id: 7, image: require('../assets/favicon.png'), locked: true },
        { id: 8, image: require('../assets/favicon.png'), locked: true },
        { id: 9, image: require('../assets/favicon.png'), locked: false },
        { id: 10, image: require('../assets/favicon.png'), locked: false },
        { id: 11, image: require('../assets/favicon.png'), locked: false },
        { id: 12, image: require('../assets/favicon.png'), locked: false },
      ],
    },
    {
      id: 3,
      name: 'Anime',
      items: [
        { id: 13, image: require('../assets/favicon.png'), locked: false },
        { id: 14, image: require('../assets/favicon.png'), locked: true },
        { id: 15, image: require('../assets/favicon.png'), locked: false },
        { id: 16, image: require('../assets/favicon.png'), locked: false },
        { id: 17, image: require('../assets/favicon.png'), locked: false },
        { id: 18, image: require('../assets/favicon.png'), locked: false },
      ],
    },
    {id: 4,
      name: 'Flowers',
      items: [
        { id: 19, image: require('../assets/favicon.png'), locked: true },
        { id: 20, image: require('../assets/favicon.png'), locked: true },
        { id: 21, image: require('../assets/favicon.png'), locked: false },
        { id: 22, image: require('../assets/favicon.png'), locked: false },
        { id: 23, image: require('../assets/favicon.png'), locked: false },
        { id: 24, image: require('../assets/favicon.png'), locked: false },
      ],
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.headerTitle}>AR</Text>
          <Text style={styles.headerTitle2}>Drawing</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HowToUseScreen')}>
          <Icon name="help-circle-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('DrawingScreen')}>
      <Image source={require('../assets/girl-painting.png')} style={styles.bannerImage} />
        <LinearGradient colors={['#D986E7', '#9C27B0']} style={styles.bannerCard}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawingScreen')}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View />
              <View style={styles.bannerContent}>
                <Text style={styles.bannerTitle}>Start Drawing</Text>
                <Text style={styles.bannerSubtitle}>Start Your AR Drawing Journey Today</Text>
                <View style={styles.bannerButton}>
                  <Text style={styles.bannerButtonText}>Let's Go</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </TouchableOpacity>

        <View style={styles.featuresContainer}>
          <FeatureCard
            imageUri={require('../assets/sketch.png')}
            title="Text To Sketch"
            color="#FFC278"
            onPress={() => navigation.navigate('TextToSketchScreen')}
          />
          <FeatureCard
            imageUri={require('../assets/phonesketch.png')}
            title="Photo To Sketch"
            color="#75C6EF"
            onPress={() => navigation.navigate('PhotoToSketchScreen')}
          />
          <FeatureCard
            imageUri={require('../assets/girl-painting.png')}
            title="Creation"
            color="#90EE90"
            onPress={() => navigation.navigate('CreationScreen')}
          />
          <FeatureCard
            imageUri={require('../assets/like.png')}
            title="Favorite"
            color="#FF9AAD"
            onPress={() => navigation.navigate('FavoriteScreen')}
          />
        </View>

        {categories.map((category) => (
          <View key={category.id}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Category', { categoryName: category.name, items: category.items })}>
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScrollView}>
              {category.items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.categoryItem}
                  onPress={() => navigation.navigate('Preview', { image: item.image, category: category.name })}
                  disabled={item.locked}
                >
                  <Image source={item.image} style={styles.categoryImage} />
                  {item.locked && (
                    <View style={styles.lockedOverlay}>
                      <Icon name="lock" size={24} color="#fff" />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#9C27B0' },
  headerTitle2: { fontSize: 20, fontWeight: '600', color: '#000' },
  bannerCard: { margin: 16, borderRadius: 12, overflow: 'hidden' },
  bannerImage: { width: '40%', height: 135, position: 'absolute',zIndex: 100,left: 5, resizeMode: 'contain'  },
  bannerContent: { padding: 16 },
  bannerTitle: { fontSize: 24, fontWeight: '700', color: '#fff', marginBottom: 4 },
  bannerSubtitle: { fontSize: 10, color: 'rgba(255, 255, 255, 0.9)', marginBottom: 12 },
  bannerButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start'
  },
  //bannerButton: { backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 5, borderRadius: 20 },
  bannerButtonText: { color: '#8A56EB', fontSize: 14, fontWeight: '600' },
  featuresContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16 },
  categoryHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginTop: 20 },
  categoryTitle: { fontSize: 18, fontWeight: '700', color: '#000' },
  viewAll: { fontSize: 14, color: '#666' },
  categoryScrollView: { paddingLeft: 16, paddingBottom: 16 },
  categoryItem: { marginRight: 16, width: 100, height: 100, borderRadius: 12, overflow: 'hidden' },
  categoryImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  lockedOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
});

export default HomeScreen;
