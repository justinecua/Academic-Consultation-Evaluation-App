import { View, Text, Dimensions } from 'react-native';
import { ClipboardList, BarChart3 } from 'lucide-react-native';
import { styles } from '../../styles/dashboardStyle';

const DashboardStats = ({ evalCount, consultCount }) => {
  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 360;

  return (
    <View style={styles.statsContainer}>
      {/* Evaluation */}
      <View style={styles.statCard}>
        <View style={[styles.statIcon, { backgroundColor: '#EBF5FF' }]}>
          <ClipboardList size={20} color="#5E72E4" />
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
            Evaluation
          </Text>
        </View>
      </View>

      {/* Consultation */}
      <View style={styles.statCard}>
        <View style={[styles.statIcon, { backgroundColor: '#F0FFF4' }]}>
          <BarChart3 size={20} color="#38A169" />
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
            Consultation
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardStats;
