import { View, Text } from 'react-native';
import { styles } from '../../../styles/evaluationDetailScreen';

export default function ScheduleCard({ icon: Icon, title, date, time, color }) {
  return (
    <View style={styles.scheduleItem}>
      <View style={styles.scheduleHeader}>
        <Icon size={16} color={color} />
        <Text style={[styles.label, { marginLeft: 6 }]}>{title}</Text>
      </View>
      <Text style={styles.scheduleDate}>{date}</Text>
      <Text style={styles.caption}>{time}</Text>
    </View>
  );
}
