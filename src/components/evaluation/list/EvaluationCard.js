import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight, Calendar, User, BookOpen } from 'lucide-react-native';

import { styles } from '../../../styles/evaluationListScreenStyle';
import { formatDate, getRatingColor } from './evaluationListUtils';

const EvaluationCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View style={styles.itemContent}>
        {/* Header */}
        <View style={styles.itemHeader}>
          <View style={styles.teacherInfo}>
            <User size={14} color="#A0AECB" />
            <Text style={styles.teacherName} numberOfLines={1}>
              {item.teacher_name || 'Unknown Teacher'}
            </Text>
          </View>

          {item.average_rating && (
            <View
              style={[
                styles.ratingPill,
                { backgroundColor: `${getRatingColor(item.average_rating)}18` },
              ]}
            >
              <Text
                style={[
                  styles.ratingText,
                  { color: getRatingColor(item.average_rating) },
                ]}
              >
                {item.average_rating.toFixed(1)}
              </Text>
            </View>
          )}
        </View>

        {/* Title */}
        <Text style={styles.title}>
          {item.subject || `Evaluation #${item.id}`}
        </Text>

        {/* Footer */}
        <View style={styles.itemFooter}>
          <View style={styles.footerItem}>
            <BookOpen size={13} color="#A0AECB" />
            <Text style={styles.footerText}>
              {item.college || 'No college'}
            </Text>
          </View>

          <View style={styles.footerItem}>
            <Calendar size={13} color="#A0AECB" />
            <Text style={styles.footerText}>{formatDate(item.date)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.chevronContainer}>
        <ChevronRight size={15} color="#1A4BAD" />
      </View>
    </TouchableOpacity>
  );
};

export default EvaluationCard;
