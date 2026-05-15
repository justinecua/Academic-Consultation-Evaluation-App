import { View, Text, TouchableOpacity } from 'react-native';
import { Download } from 'lucide-react-native';
import { styles } from '../../../../styles/evaluationDetailScreen';

export default function EvaluationHeader({ teacher, subject, onDownload }) {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, marginRight: 12 }}>
        <Text style={styles.headerTitle} numberOfLines={2}>
          {teacher}
        </Text>
        <Text style={styles.headerSubtitle}>
          {subject || 'No subject specified'}
        </Text>
      </View>

      <TouchableOpacity onPress={onDownload} style={styles.iconButton}>
        <Download size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}
