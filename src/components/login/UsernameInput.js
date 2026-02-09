import React from 'react';
import { View, TextInput } from 'react-native';
import { User } from 'lucide-react-native';
import { styles } from '../../styles/loginStyle';
import { moderateScale } from 'react-native-size-matters';

const UsernameInput = ({ value, onChange, focused, onFocus, onBlur }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={[styles.inputWrapper, focused && styles.inputFocused]}>
        <User
          size={moderateScale(20)}
          color={focused ? '#1E3A8A' : '#6B7280'}
        />

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Enter your username"
          placeholderTextColor="#9CA3AF"
        />
      </View>
    </View>
  );
};

export default UsernameInput;
