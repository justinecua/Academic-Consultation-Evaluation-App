import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/consultFormScreenStyle';

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

export default Section;
