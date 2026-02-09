import { View, Text } from 'react-native';
import { styles } from '../../../../styles/evaluationDetailScreen';
import CardHeader from '../CardHeader';

export default function CommentsSection({ comments }) {
  if (!comments) return null;

  return (
    <View style={styles.card}>
      <CardHeader title="Comments" />
      <Text style={styles.commentText}>{comments}</Text>
    </View>
  );
}
