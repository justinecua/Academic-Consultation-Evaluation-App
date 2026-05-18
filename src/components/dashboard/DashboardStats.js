import { View, Text, Dimensions } from 'react-native';
import { ClipboardList, MessageSquare } from 'lucide-react-native';
import { styles } from '../../styles/dashboardStyle';

const DashboardStats = ({ evalCount, consultCount }) => {
  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 360;

  return (
    <View style={styles.statsContainer}>
      {/* Evaluations */}
      <View style={styles.statCard}>
        <View style={[styles.statIcon, { backgroundColor: '#EBF1FC' }]}>
          <ClipboardList size={20} color="#0D2460" />
        </View>
        <View style={styles.statText}>
          <Text
            style={[styles.statNumber, isSmallScreen && styles.statNumberSmall]}
          >
            {evalCount}
          </Text>
          <Text
            style={[styles.statLabel, isSmallScreen && styles.statLabelSmall]}
          >
            Evaluations
          </Text>
        </View>
      </View>

      {/* Consultations */}
      <View style={styles.statCard}>
        <View style={[styles.statIcon, { backgroundColor: '#E8EDF9' }]}>
          <MessageSquare size={20} color="#0D2460" />
        </View>
        <View style={styles.statText}>
          <Text
            style={[styles.statNumber, isSmallScreen && styles.statNumberSmall]}
          >
            {consultCount}
          </Text>
          <Text
            style={[styles.statLabel, isSmallScreen && styles.statLabelSmall]}
          >
            Consultations
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardStats;
