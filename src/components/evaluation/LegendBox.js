import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/evalFormScreenStyle';

const LegendBox = () => (
  <View style={styles.legendContainer}>
    <Text style={styles.legendText}>5 = Excellent</Text>
    <Text style={styles.legendText}>4 = Very Good</Text>
    <Text style={styles.legendText}>3 = Good</Text>
    <Text style={styles.legendText}>2 = Fair</Text>
    <Text style={styles.legendText}>1 = Poor</Text>
    <Text style={styles.legendText}>NA = Not Applicable</Text>
  </View>
);

export default LegendBox;
