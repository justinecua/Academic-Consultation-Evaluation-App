import { View, Text, TouchableOpacity } from 'react-native';
import { Download } from 'lucide-react-native';
import { styles } from '../../../../styles/evaluationDetailScreen';

export default function EvaluationHeader({ teacher, subject, onDownload }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerTitle}>{teacher}</Text>
        <Text style={styles.headerSubtitle}>
          {subject || 'No subject specified'}
        </Text>
      </View>

      <TouchableOpacity onPress={onDownload} style={styles.iconButton}>
        <Download size={20} color="#6B7280" />
      </TouchableOpacity>
    </View>
  );
}
