import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/evalFormScreenStyle';

const RatingButton = ({ questionId, value, selected, onPress }) => (
  <TouchableOpacity
    style={[styles.ratingButton, selected && styles.selectedRating]}
    onPress={() => onPress(questionId, value)}
  >
    <Text style={[styles.ratingText, selected && styles.selectedRatingText]}>
      {value === 'NA' ? 'NA' : value}
    </Text>
  </TouchableOpacity>
);

export default RatingButton;
