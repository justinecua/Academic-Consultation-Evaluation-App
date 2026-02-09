import { View } from 'react-native';
import { User, BookOpen, Building, MapPin } from 'lucide-react-native';
import { styles } from '../../../../styles/evaluationDetailScreen';
import CardHeader from '../CardHeader';
import InfoRow from '../InfoRow';

export default function BasicInfoSection({ evaluation }) {
  return (
    <View style={styles.card}>
      <CardHeader title="Evaluation Details" subtitle="BASIC INFORMATION" />
      <View style={styles.grid}>
        <InfoRow icon={User} label="Teacher" value={evaluation.teacher_name} />
        <InfoRow icon={BookOpen} label="Subject" value={evaluation.subject} />
        <InfoRow icon={Building} label="College" value={evaluation.college} />
        <InfoRow icon={MapPin} label="Room" value={evaluation.room_number} />
      </View>
    </View>
  );
}
