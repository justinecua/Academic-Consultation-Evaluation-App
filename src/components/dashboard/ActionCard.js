import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { styles } from '../../styles/dashboardStyle';

const ActionCard = ({
  title,
  description,
  icon,
  onPress,
  color,
  iconBg,
  count,
}) => {
  return (
    <TouchableOpacity
      style={styles.actionCard}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <View
        style={[styles.actionIcon, { backgroundColor: iconBg || '#EBF1FC' }]}
      >
        {icon}
      </View>

      <View style={styles.actionContent}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.actionTitle}>{title}</Text>
          {count !== undefined && count !== null && (
            <View style={styles.countBadge}>
              <Text style={styles.countBadgeText}>{count}</Text>
            </View>
          )}
        </View>
        <Text style={styles.actionDescription}>{description}</Text>
      </View>

      <View style={styles.chevronContainer}>
        <ChevronRight size={16} color="#1A4BAD" />
      </View>
    </TouchableOpacity>
  );
};

export default ActionCard;
