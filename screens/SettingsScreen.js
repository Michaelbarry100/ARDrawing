import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({ navigation }) => {
  const menuItems = [
    { id: 1, title: 'More App', icon: 'grid' },
    { id: 2, title: 'Share App', icon: 'share-variant' },
    { id: 3, title: 'Rate Us', icon: 'star' },
    { id: 4, title: 'Privacy Policy', icon: 'shield-check' },
    { id: 5, title: 'Refer Users', icon: 'account-group' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Setting</Text>
        <View style={{ width: 30 }}></View>
      </View>

      <View style={styles.featureCard}>
        <Image
          source={require('../assets/favicon.png')}
          style={styles.featureIcon}
        />
        <View style={styles.featureContent}>
          <Text style={styles.featureTitle}>AR Draw</Text>
          <Text style={styles.featureSubtitle}>Create stunning drawings with AR precision!</Text>
        </View>
      </View>

      {menuItems.map(item => (
        <TouchableOpacity key={item.id} style={styles.menuItem}>
          <View style={[styles.iconContainer, getIconBgColor(item.id)]}>
            <Icon name={item.icon} size={22} color="#fff" />
          </View>
          <Text style={styles.menuItemText}>{item.title}</Text>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const getIconBgColor = (id) => {
  const colors = {
    1: { backgroundColor: '#FFD580' },
    2: { backgroundColor: '#AEDFF7' },
    3: { backgroundColor: '#FFD700' },
    4: { backgroundColor: '#FFB6C1' },
    5: { backgroundColor: '#D8BFD8' },
  };
  return colors[id] || { backgroundColor: '#AEDFF7' };
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
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8A56EB',
    borderRadius: 12,
    padding: 16,
    margin: 16
  },
  featureIcon: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12
  },
  featureContent: {
    flex: 1
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4
  },
  featureSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  }
});

export default SettingsScreen;