import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TextToSketchScreen from '../screens/TextToSketchScreen';
import PhotoToSketchScreen from '../screens/PhotoToSketchScreen';
import CreationScreen from '../screens/CreationScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import DrawingScreen from '../screens/DrawingScreen';
import CategoryScreen from '../screens/CategoryScreen';
import PreviewScreen from '../screens/PreviewScreen';
//import HowToUseScreen from '../screens/HowToUseScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Drawing" component={DrawingScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="TextToSketch" component={TextToSketchScreen} />
      <Stack.Screen name="PhotoToSketch" component={PhotoToSketchScreen} />
      <Stack.Screen name="Creation" component={CreationScreen} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
      {/* <Stack.Screen name="HowToUse" component={HowToUseScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
