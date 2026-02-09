import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../../styles/consultationDetailScreenStyle';

const ErrorState = ({ onRetry }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>Failed to load consultation details</Text>

    <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
      <Text style={styles.retryButtonText}>Try Again</Text>
    </TouchableOpacity>
  </View>
);

export default ErrorState;
