import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Eye, EyeOff, User, Lock } from 'lucide-react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles/loginStyle';
import * as Burnt from 'burnt';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const LoginScreen = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const { login } = useContext(AuthContext);

  const handleInputChange = (field, value) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
  };

  const handleFocus = field => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const validateForm = () => {
    if (!credentials.username.trim() || !credentials.password.trim()) {
      Burnt.toast({
        title: 'Please enter both username and password',
        preset: 'error',
      });
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const result = await login(credentials.username, credentials.password);

      Burnt.toast({
        title: result.message,
        preset: result.success ? 'done' : 'error',
      });
    } catch (error) {
      Burnt.toast({
        title: 'Authentication failed. Please try again.',
        preset: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    credentials.username.trim() && credentials.password.trim();
  const isButtonDisabled = loading || !isFormValid;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Assessly</Text>
            <Text style={styles.subtitle}>
              Promoting academic growth through evaluation and consultation
            </Text>
          </View>
        </View>

        {/* Form */}
        <View style={styles.formSection}>
          {/* Username */}
          <View style={styles.inputContainer}>
            <View
              style={[
                styles.inputWrapper,
                focusedField === 'username' && styles.inputFocused,
              ]}
            >
              <User
                size={moderateScale(20)}
                color={focusedField === 'username' ? '#1E3A8A' : '#6B7280'}
              />
              <TextInput
                style={styles.input}
                value={credentials.username}
                onChangeText={value => handleInputChange('username', value)}
                onFocus={() => handleFocus('username')}
                onBlur={handleBlur}
                placeholder="Enter your username"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <View
              style={[
                styles.inputWrapper,
                focusedField === 'password' && styles.inputFocused,
              ]}
            >
              <Lock
                size={moderateScale(20)}
                color={focusedField === 'password' ? '#1E3A8A' : '#6B7280'}
              />
              <TextInput
                style={styles.input}
                value={credentials.password}
                onChangeText={value => handleInputChange('password', value)}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
                secureTextEntry={!showPassword}
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.visibilityToggle}
                disabled={loading}
              >
                {showPassword ? (
                  <Eye size={moderateScale(20)} color="#6B7280" />
                ) : (
                  <EyeOff size={moderateScale(20)} color="#6B7280" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={isButtonDisabled}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 St. Michael’s College of Iligan Inc. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
