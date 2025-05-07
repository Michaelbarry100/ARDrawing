import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import DrawingScreen from '../screens/DrawingScreen';
import CategoryScreen from '../screens/CategoryScreen';
import PreviewScreen from '../screens/PreviewScreen';
import CreationScreen from '../screens/CreationScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import TextDrawingScreen from '../screens/TextDrawingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ARDrawingCanvas from '../screens/ARDrawingCanvas';
import HomeScreen from '../screens/HomeScreen';
//import hotoToSketchScreen from '../screens/PhotoToSketchScreen';
import PhotoToSketchScreen from '../screens/PhotoToSketchScreen';
import TextToSketchScreen from '../screens/TextToSketchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HowToUseScreen from '../screens/HowToUseScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreationScreen" component={DrawingScreen} />
      <Stack.Screen name="PhotoToSketchScreen" component={PhotoToSketchScreen} />
      <Stack.Screen name="TextToSketchScreen" component={TextToSketchScreen} />
      <Stack.Screen name="CreationMain" component={CreationScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
      <Stack.Screen name="ARDrawingCanvas" component={ARDrawingCanvas} />
      <Stack.Screen name="TextDrawing" component={TextDrawingScreen} />
      <Stack.Screen name="HowToUseScreen" component={HowToUseScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const CreationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreationScreen" component={CreationScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
      <Stack.Screen name="HowToUseScreen" component={HowToUseScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="CreationScreen" component={CreationScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="HowToUseScreen" component={HowToUseScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = 'pencil';
          } else if (route.name === 'Creations') {
            iconName = 'palette';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }
          
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8A56EB',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500'
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Creations" component={CreationStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default AppNavigator;