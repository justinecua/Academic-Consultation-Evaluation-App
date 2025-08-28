import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/consultFormScreenStyle';

const FormTextArea = ({ label, value, onChangeText, height = 100 }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, { height }]}
      value={value}
      onChangeText={onChangeText}
      multiline
      placeholder={`Enter ${label.toLowerCase()}`}
      placeholderTextColor="#A0AEC0"
    />
  </View>
);

export default FormTextArea;
