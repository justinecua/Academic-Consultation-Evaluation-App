import { View, Text, TouchableOpacity } from 'react-native';
import { BookOpen } from 'lucide-react-native';

import { styles } from '../../../styles/evaluationListScreenStyle';

const EvaluationEmptyState = ({ onRefresh }) => {
  return (
    <View style={styles.emptyState}>
      <View style={styles.emptyIcon}>
        <BookOpen size={48} color="#CBD5E0" />
      </View>

      <Text style={styles.emptyTitle}>No Evaluations</Text>
      <Text style={styles.emptySubtitle}>
        You haven't submitted any evaluations yet.
      </Text>

      <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EvaluationEmptyState;
