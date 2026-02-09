import { View, Text } from 'react-native';
import { styles } from '../../../styles/evaluationDetailScreen';

export default function InfoRow({ icon: Icon, label, value }) {
  return (
    <View style={styles.gridItem}>
      <View style={styles.gridLabel}>
        <Icon size={14} color="#6B7280" />
        <Text style={[styles.label, { marginLeft: 6 }]}>{label}</Text>
      </View>
      <Text style={styles.gridValue} numberOfLines={1}>
        {value || '—'}
      </Text>
    </View>
  );
}
