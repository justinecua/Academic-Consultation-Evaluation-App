import { View } from 'react-native';
import { Calendar, MessageSquare } from 'lucide-react-native';
import { styles } from '../../../../styles/evaluationDetailScreen';
import CardHeader from '../CardHeader';
import ScheduleCard from '../ScheduleCard';
import { formatDate, formatTime } from '../format';

export default function ScheduleSection({ evaluation }) {
  return (
    <View style={styles.card}>
      <CardHeader title="Schedule" subtitle="OBSERVATION & CONFERENCE" />
      <View style={styles.scheduleContainer}>
        <ScheduleCard
          icon={Calendar}
          title="Observation"
          date={formatDate(evaluation.date)}
          time={formatTime(evaluation.time_of_observation)}
          color="#4F46E5"
        />
        <View style={styles.scheduleDivider} />
        <ScheduleCard
          icon={MessageSquare}
          title="Conference"
          date={formatDate(evaluation.date_of_conference)}
          time={formatTime(evaluation.time_of_conference)}
          color="#059669"
        />
      </View>
    </View>
  );
}
