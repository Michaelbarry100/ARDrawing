import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreationScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('drawings');
  
  // Mock data for user creations
  const userDrawings = [
    { id: 1, image: require('../assets/favicon.png'), date: '2 days ago' },
    { id: 2, image: require('../assets/favicon.png'), date: '1 week ago' },
    { id: 3, image: require('../assets/favicon.png'), date: '2 weeks ago' },
  ];
  
  const arProjects = [
    { id: 1, image: require('../assets/favicon.png'), date: '3 days ago' },
    { id: 2, image: require('../assets/favicon.png'), date: '5 days ago' },
  ];

  const renderCreationItem = (item) => (
    <TouchableOpacity 
      key={item.id}
      style={styles.creationItem}
      onPress={() => navigation.navigate('Preview', { image: item.image })}
    >
      <Image source={item.image} style={styles.creationImage} />
      <View style={styles.creationDetails}>
        <Text style={styles.creationDate}>{item.date}</Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Icon name="delete-outline" size={20} color="#FF4D4D" />
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
        <Text style={styles.headerTitle}>My Creations</Text>
        <View style={{ width: 30 }}></View>
      </View>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'drawings' && styles.activeTab]}
          onPress={() => setSelectedTab('drawings')}
        >
          <Text style={[styles.tabText, selectedTab === 'drawings' && styles.activeTabText]}>
            Drawings
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'ar' && styles.activeTab]}
          onPress={() => setSelectedTab('ar')}
        >
          <Text style={[styles.tabText, selectedTab === 'ar' && styles.activeTabText]}>
            AR Projects
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.creationsGrid}>
        {selectedTab === 'drawings' ? 
          userDrawings.map(renderCreationItem) : 
          arProjects.map(renderCreationItem)
        }
      </ScrollView>
      
      <TouchableOpacity 
        style={styles.newButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Icon name="plus" size={24} color="#fff" />
        <Text style={styles.newButtonText}>Create New</Text>
      </TouchableOpacity>
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
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 16
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0'
  },
  activeTab: {
    borderBottomColor: '#8A56EB'
  },
  tabText: {
    fontSize: 16,
    color: '#999'
  },
  activeTabText: {
    color: '#8A56EB',
    fontWeight: '600'
  },
  creationsGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  creationItem: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16
  },
  creationImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover'
  },
  creationDetails: {
    height: '20%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12
  },
  creationDate: {
    color: '#666',
    fontSize: 12
  },
  deleteButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newButton: {
    backgroundColor: '#8A56EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    margin: 16,
    gap: 8
  },
  newButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default CreationScreen;