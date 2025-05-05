import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';

// Note: Ensure these dependencies are installed in your project:
// npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
// npm install react-native-screens react-native-safe-area-context
// npm install react-native-vector-icons

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;