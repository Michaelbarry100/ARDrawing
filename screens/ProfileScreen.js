import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({ navigation }) => {
  // Mock user data
  const user = {
    name: 'User Name',
    email: 'user@example.com',
    profileImage: require('../assets/icon.png'),
    premiumMember: false
  };

  const menuItems = [
    { id: 'creations', icon: 'palette', title: 'My Creations', screen: 'Creation' },
    { id: 'favorites', icon: 'heart', title: 'My Favorites', screen: 'Favorite' },
    { id: 'notifications', icon: 'bell', title: 'Notifications', screen: 'Notifications' },
    { id: 'settings', icon: 'cog', title: 'Settings', screen: 'Settings' },
    { id: 'help', icon: 'help-circle', title: 'Help & Support', screen: 'Help' },
    { id: 'about', icon: 'information', title: 'About App', screen: 'About' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        <View style={styles.profileSection}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          
          {!user.premiumMember && (
            <TouchableOpacity style={styles.upgradeBanner}>
              <Icon name="star" size={20} color="#FFD700" />
              <Text style={styles.upgradeText}>Upgrade to Premium</Text>
              <Icon name="chevron-right" size={20} color="#333" />
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.menuSection}>
          {menuItems.map(item => (
            <TouchableOpacity 
              key={item.id}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.menuItemLeft}>
                <Icon name={item.icon} size={24} color="#8A56EB" />
                <Text style={styles.menuItemTitle}>{item.title}</Text>
              </View>
              <Icon name="chevron-right" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="logout" size={24} color="#FF4D4D" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
    color: '#000'
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16
  },
  upgradeBanner: {
    flexDirection: 'row',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%'
  },
  upgradeText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    marginLeft: 10
  },
  menuSection: {
    paddingTop: 16
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0'
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItemTitle: {
    fontSize: 16,
    color: '#333',
    marginLeft: 16
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginTop: 16,
    marginBottom: 32
  },
  logoutText: {
    fontSize: 16,
    color: '#FF4D4D',
    fontWeight: '500',
    marginLeft: 8
  }
});

export default ProfileScreen;