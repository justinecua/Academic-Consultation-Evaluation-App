import { View, Text } from 'react-native';
import { User } from 'lucide-react-native';
import { styles } from '../../styles/dashboardStyle';

const DashboardHeader = ({ greeting, user }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.greeting}>{greeting} 👋</Text>
        <Text style={styles.welcome}>
          Welcome back{user ? `, ${user.first_name || user.username}` : ''}
        </Text>
      </View>

      <View style={styles.avatar}>
        <User size={24} color="#5E72E4" />
      </View>
    </View>
  );
};

export default DashboardHeader;
