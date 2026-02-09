import { View, Text, TouchableOpacity } from 'react-native';
import { RefreshCw } from 'lucide-react-native';
import {
  consultationStyles as styles,
  COLORS,
} from '../../styles/consultationStyles';

const ConsultationEmptyState = ({ errorMsg, onRetry }) => {
  return (
    <View style={styles.emptyWrap}>
      <Text style={styles.emptyTitle}>
        {errorMsg ? 'Something went wrong' : 'No consultations yet'}
      </Text>

      <Text style={styles.emptyText}>
        {errorMsg || 'Pull down to refresh, or check back later.'}
      </Text>

      <TouchableOpacity style={styles.retryBtn} onPress={onRetry}>
        <RefreshCw size={16} color={COLORS.primary} />
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConsultationEmptyState;
