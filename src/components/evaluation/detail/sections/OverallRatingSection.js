import { View, Text } from 'react-native';
import { styles } from '../../../../styles/evaluationDetailScreen';
import CardHeader from '../CardHeader';
import { getRatingColor } from '../format';

export default function OverallRatingSection({ evaluation }) {
  const color = getRatingColor(evaluation.average_rating);

  return (
    <View style={styles.card}>
      <CardHeader title="Overall Rating" />
      <View style={styles.ratingContainer}>
        <View style={[styles.ratingCircle, { backgroundColor: color }]}>
          <Text style={styles.ratingNumber}>
            {evaluation.average_rating?.toFixed(1) || '—'}
          </Text>
        </View>
        <Text style={styles.caption}>
          Based on {evaluation.responses_detail?.length || 0} criteria
        </Text>
      </View>
    </View>
  );
}
