import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import AuthNavigator from './src/navigation/AppNavigator';

function App() {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <AuthNavigator />
    </AuthProvider>
  );
}

export default App;
