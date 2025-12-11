import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import AuthNavigator from './src/navigation/AppNavigator';
import FlashMessage from "react-native-flash-message";

function App() {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <AuthNavigator />
      <FlashMessage position="top" />
    </AuthProvider>
  );
}

export default App;
