import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar, ChevronRight } from 'lucide-react-native';
import {
  consultationStyles as styles,
  COLORS,
} from '../../styles/consultationStyles';

const formatDate = dateString => {
  if (!dateString) return 'No date';
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return 'No date';

  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const buildTermSemester = (term, semester) => {
  if (term && semester) return `${term} · ${semester} Sem`;
  return semester || '';
};

const ConsultationCard = ({ item, onPress }) => {
  const name = item?.student_name || 'Unknown Student';
  const subject = item?.subject || `Consultation #${item?.id ?? ''}`;
  const date = formatDate(item?.created_at);
  const termSemester = buildTermSemester(item?.term, item?.semester);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>

        <Text style={styles.subject} numberOfLines={1}>
          {subject}
        </Text>

        <View style={styles.metaRow}>
          <Calendar size={12} color={COLORS.muted} />
          <Text style={styles.metaText}>{date}</Text>
        </View>
      </View>

      <View style={{ alignItems: 'flex-end', gap: 8 }}>
        {!!termSemester && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{termSemester}</Text>
          </View>
        )}
        <View
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            backgroundColor: COLORS.emptyBg,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ChevronRight size={15} color={COLORS.accent} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ConsultationCard;
