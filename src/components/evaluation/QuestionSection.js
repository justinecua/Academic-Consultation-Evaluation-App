import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/evalFormScreenStyle';
import RatingButton from './RatingButton';

const QuestionSection = ({ title, questions, ratings, handleRatingChange }) => (
  <>
    <Text style={styles.sectionTitle}>{title}</Text>
    {questions.map(item => (
      <View key={item.id} style={styles.questionContainer}>
        <Text style={styles.questionText}>
          {item.id}. {item.question}
        </Text>
        <View style={styles.ratingContainer}>
          {[5, 4, 3, 2, 1, 'NA'].map(value => (
            <RatingButton
              key={value}
              questionId={item.id}
              value={value}
              selected={ratings[item.id] === value}
              onPress={handleRatingChange}
            />
          ))}
        </View>
      </View>
    ))}
  </>
);

export default QuestionSection;
