import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  login as apiLogin,
  getProfile,
  logout as logoutAPI,
} from '../api/services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //  Restore session on app start
  useEffect(() => {
    const loadSession = async () => {
      try {
        const access = await AsyncStorage.getItem('access');
        const refresh = await AsyncStorage.getItem('refresh');

        if (access && refresh) {
          setAccessToken(access);
          const profile = await getProfile(access);
          setUser(profile);
        }
      } catch (error) {
        console.error('Session restore failed:', error);
        await AsyncStorage.multiRemove(['access', 'refresh', 'user']);
      } finally {
        setIsLoading(false);
      }
    };

    loadSession();
  }, []);

  const login = async (username, password) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      const refresh = await AsyncStorage.getItem('refresh');
      const access = await AsyncStorage.getItem('access');
      if (refresh && access) {
        await logoutAPI(refresh, access);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      await AsyncStorage.multiRemove(['access', 'refresh']);
      setUser(null);
      setAccessToken(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
