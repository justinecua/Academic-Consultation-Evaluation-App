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
import { moderateScale } from 'react-native-size-matters';
import { showMessage } from 'react-native-flash-message';

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

  const validateForm = () => {
    if (!credentials.username.trim() || !credentials.password.trim()) {
      showMessage({
        message: "Please enter both username and password",
        type: "danger",
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

      console.log("LOGIN RESULT →", result);

      if (!result) {
        showMessage({ message: "No response from server.", type: "danger" });
        return;
      }

      if (!result.success) {
        showMessage({ message: result.message || "Login failed", type: "danger" });
        return;
      }

      // SUCCESS 🎉
      showMessage({ message: "Login successful!", type: "success" });
      navigation.replace("Home"); // adjust to your real screen name

    } catch (error) {
      console.log("LOGIN ERROR →", error);
      showMessage({
        message: "Something went wrong. Please try again.",
        type: "danger",
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
        
        {/* HEADER */}
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

        {/* USERNAME */}
        <View style={styles.formSection}>
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
                onFocus={() => setFocusedField('username')}
                onBlur={() => setFocusedField(null)}
                placeholder="Enter your username"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          {/* PASSWORD */}
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
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                secureTextEntry={!showPassword}
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
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

          {/* LOGIN BUTTON */}
          <TouchableOpacity
            style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={isButtonDisabled}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 St. Michael’s College of Iligan Inc. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
