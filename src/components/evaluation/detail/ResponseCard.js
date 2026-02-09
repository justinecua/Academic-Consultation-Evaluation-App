import { View, Text } from 'react-native';
import { styles } from '../../../styles/evaluationDetailScreen';
import { getRatingColor } from './format';

export default function ResponseCard({ question, rating, isLast }) {
  const labels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
  const color = getRatingColor(rating);

  return (
    <View style={[styles.responseItem, !isLast && styles.responseDivider]}>
      <Text style={styles.questionText}>{question}</Text>

      <View style={[styles.ratingPill, { backgroundColor: `${color}15` }]}>
        <Text style={[styles.ratingValue, { color }]}>{rating}/5</Text>
        <Text style={[styles.ratingLabel, { color }]}>
          {labels[rating - 1] || '—'}
        </Text>
      </View>
    </View>
  );
}
