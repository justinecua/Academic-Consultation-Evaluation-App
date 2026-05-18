import { View, Text, TouchableOpacity } from 'react-native';
import { BookOpen, RefreshCw } from 'lucide-react-native';

import {
  consultationStyles as styles,
  COLORS,
} from '../../../styles/consultationStyles';

const EvaluationEmptyState = ({ onRefresh }) => {
  return (
    <View style={styles.emptyWrap}>
      <View style={styles.emptyIcon}>
        <BookOpen size={28} color={COLORS.accent} />
      </View>

      <Text style={styles.emptyTitle}>No Evaluations yet</Text>

      <Text style={styles.emptyText}>
        Pull down to refresh, or check back later
      </Text>

      <TouchableOpacity style={styles.retryBtn} onPress={onRefresh}>
        <RefreshCw size={15} color={COLORS.accent} />
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EvaluationEmptyState;
