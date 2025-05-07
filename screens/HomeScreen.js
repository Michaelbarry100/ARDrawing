import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatureCard from '../components/FeatureCard';
import CategoryPreview from '../components/CategoryPreview';
import { useNavigation } from '@react-navigation/native';
//import DrawingScreen from './DrawingScreen';


const HomeScreen = ({ navigation }) => {
  //const navigation = useNavigation();
  const categories = [
    { id: 1, name: 'Aesthetics', image: require('../assets/favicon.png') },
    { id: 2, name: 'Animals', image: require('../assets/favicon.png'), locked: true },
    { id: 3, name: 'Anime', image: require('../assets/favicon.png'), locked: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
      <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
        <Icon name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <View style={{justifyContent:"center", flexDirection: "row"}}>
        <Text style={styles.headerTitle}>AR</Text>
        <Text style={styles.headerTitle2}>Drawing</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HowToUseScreen')}>
          <Icon name="help-circle-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity 
          style={styles.bannerCard}
          onPress={() => navigation.navigate('DrawingScreen')}
        >
          {/* <Image 
            source={require('../assets/photoSketch.png')} 
            style={styles.bannerImage}
          /> */}
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Start Drawing</Text>
            <Text style={styles.bannerSubtitle}>Start Your AR Drawing Journey Today</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Let's Go</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View style={styles.featuresContainer}>
          <FeatureCard 
            imageUri={require('../assets/photoSketch.png')} 
            title="Text To Sketch" 
            color="#FFC278"
            onPress={() => navigation.navigate('TextToSketchScreen')}
          />
          <FeatureCard 
            imageUri= {require('../assets/photoSketch.png')}
            title="Photo To Sketch" 
            color="#75C6EF"
            onPress={() => navigation.navigate("PhotoToSketchScreen")}
          />
          <FeatureCard 
            imageUri={require('../assets/photoSketch.png')} 
            title="Creation" 
            color="#90EE90"
            onPress={() => navigation.navigate('CreationScreen')}
          />
          <FeatureCard 
            imageUri={require('../assets/photoSketch.png')}
            title="Favorite" 
            color="#FF9AAD"
            onPress={() => navigation.navigate('FavoriteScreen')}
          />
        </View>

        {categories.map((category, index) => (
          <View key={category.id}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Category', { categoryName: category.name })}>
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScrollView}>
              <CategoryPreview 
                category={category}
                onPress={() => navigation.navigate('Preview', { image: category.image, category: category.name })}
              />
            </ScrollView>
          </View>
        ))}
      </ScrollView>
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
    color: '#9C27B0'
  },
  headerTitle2: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff00'
  },
  bannerCard: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#8A56EB',
    //#9C27B0, #673AB7
  },
  bannerImage: {
    width: '100%',
    height: 120,
    position: 'absolute'
  },
  bannerContent: {
    padding: 16
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4
  },
  bannerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 12
  },
  bannerButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start'
  },
  bannerButtonText: {
    color: '#8A56EB',
    fontSize: 14,
    fontWeight: '600'
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 8
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000'
  },
  viewAll: {
    fontSize: 14,
    color: '#666'
  },
  categoryScrollView: {
    paddingLeft: 16,
    paddingBottom: 16
  }
});

export default HomeScreen;