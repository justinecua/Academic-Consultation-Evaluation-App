import { View, Text } from 'react-native';
import { User, GraduationCap } from 'lucide-react-native';
import { styles } from '../../styles/dashboardStyle';

const DashboardHeader = ({ greeting, user }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>{greeting}</Text>
          <Text style={styles.welcome}>
            Welcome back,{' '}
            <Text style={styles.welcomeAccent}>
              {user ? user.first_name || user.username : 'there'}
            </Text>
          </Text>
        </View>

        <View style={styles.avatar}>
          <User size={20} color="#8BAAD8" />
        </View>
      </View>
    </View>
  );
};

export default DashboardHeader;
