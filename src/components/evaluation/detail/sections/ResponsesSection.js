import { View } from 'react-native';
import { styles } from '../../../../styles/evaluationDetailScreen';
import CardHeader from '../CardHeader';
import ResponseCard from '../ResponseCard';

export default function ResponsesSection({ responses }) {
  return (
    <View style={styles.card}>
      <CardHeader
        title="Evaluation Criteria"
        subtitle={`${responses?.length || 0} ITEMS`}
      />
      {responses?.map((r, i) => (
        <ResponseCard
          key={r.id}
          question={r.question?.text}
          rating={r.rating}
          isLast={i === responses.length - 1}
        />
      ))}
    </View>
  );
}
