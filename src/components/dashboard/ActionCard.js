import { TouchableOpacity, View, Text } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { styles } from '../../styles/dashboardStyle';

const ActionCard = ({ title, description, icon, onPress, color }) => {
  return (
    <TouchableOpacity
      style={styles.actionCard}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.actionIcon, { backgroundColor: `${color}15` }]}>
        {icon}
      </View>

      <View style={styles.actionContent}>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionDescription}>{description}</Text>
      </View>

      <View
        style={[styles.chevronContainer, { backgroundColor: `${color}15` }]}
      >
        <ChevronRight size={18} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default ActionCard;
