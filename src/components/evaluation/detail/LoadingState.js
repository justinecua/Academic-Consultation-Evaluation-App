import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from '../../../styles/evaluationDetailScreen';

export default function LoadingState() {
  return (
    <View style={styles.stateContainer}>
      <ActivityIndicator size="large" color="#4F46E5" />
      <Text style={[styles.stateText, { marginTop: 16 }]}>
        Loading Evaluation
      </Text>
    </View>
  );
}
