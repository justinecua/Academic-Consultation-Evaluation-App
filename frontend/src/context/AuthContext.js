import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as apiLogin, getProfile } from '../api/services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  console.log(user);
  console.log(accessToken);

  const login = async (username, password) => {
    try {
      const { access, refresh, user } = await apiLogin(username, password);

      await AsyncStorage.setItem('access', access);
      await AsyncStorage.setItem('refresh', refresh);

      setAccessToken(access);
      setUser(user);

      return { success: true, message: 'Login Successful', user };
    } catch (error) {
      const message = error.response?.data?.error || 'Something went wrong';
      return { success: false, message };
    }
  };

  const fetchProfile = async () => {
    if (!accessToken) return;
    try {
      const profile = await getProfile(accessToken);
      setUser(profile);
    } catch (error) {
      console.error('Fetch profile error:', error);
    }
  };

  const logout = async () => {
    setUser(null);
    setAccessToken(null);
    await AsyncStorage.removeItem('access');
    await AsyncStorage.removeItem('refresh');
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, login, fetchProfile, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
