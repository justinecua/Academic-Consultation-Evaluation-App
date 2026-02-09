import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../../styles/evaluationDetailScreen';

export default function ErrorState({ onRetry }) {
  return (
    <View style={styles.stateContainer}>
      <Text style={styles.stateText}>Unable to Load</Text>
      <Text style={[styles.stateSubtext, { marginTop: 4 }]}>
        Please try again
      </Text>
      <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}
