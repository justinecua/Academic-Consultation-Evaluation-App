import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/consultFormScreenStyle';

const FormField = ({ label, value, onChangeText, editable = true }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      editable={editable}
      placeholder={`Enter ${label.toLowerCase()}`}
      placeholderTextColor="#A0AEC0"
    />
  </View>
);

export default FormField;
