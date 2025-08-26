import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const RatingScale = ({ onRatingChange }) => {
  const [selectedRating, setSelectedRating] = React.useState(null);

  const handleRatingPress = rating => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  return (
    <View style={globalStyles.ratingContainer}>
      <Text style={globalStyles.ratingLabel}>Rating:</Text>
      {[1, 2, 3, 4, 5, 'NA'].map(item => (
        <TouchableOpacity
          key={item}
          style={[
            globalStyles.ratingButton,
            selectedRating === item && globalStyles.ratingButtonSelected,
          ]}
          onPress={() => handleRatingPress(item)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingScale;
