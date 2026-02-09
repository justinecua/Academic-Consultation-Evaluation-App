import { View, Text } from 'react-native';
import { styles } from '../../../styles/evaluationDetailScreen';

export default function CardHeader({ title, subtitle }) {
  return (
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
    </View>
  );
}
