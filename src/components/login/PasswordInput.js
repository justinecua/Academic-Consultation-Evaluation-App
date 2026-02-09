import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Eye, EyeOff, Lock } from 'lucide-react-native';
import { styles } from '../../styles/loginStyle';
import { moderateScale } from 'react-native-size-matters';

const PasswordInput = ({
  value,
  onChange,
  focused,
  onFocus,
  onBlur,
  showPassword,
  togglePassword,
  loading,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={[styles.inputWrapper, focused && styles.inputFocused]}>
        <Lock
          size={moderateScale(20)}
          color={focused ? '#1E3A8A' : '#6B7280'}
        />

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={!showPassword}
          placeholder="Enter your password"
          placeholderTextColor="#9CA3AF"
        />

        <TouchableOpacity onPress={togglePassword} disabled={loading}>
          {showPassword ? (
            <Eye size={moderateScale(20)} color="#6B7280" />
          ) : (
            <EyeOff size={moderateScale(20)} color="#6B7280" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
