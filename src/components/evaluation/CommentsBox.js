import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/evalFormScreenStyle';

const CommentsBox = ({ value, onChangeText }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>OTHER COMMENTS</Text>
    <TextInput
      style={styles.commentInput}
      multiline
      numberOfLines={4}
      placeholder="Enter your comments here..."
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default CommentsBox;
