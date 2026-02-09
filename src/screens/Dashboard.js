import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles/dashboardStyle';
import { useDashboardData } from '../hooks/useDashboardData';
import { useDashboardActions } from '../hooks/useDashboardActions';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardStats from '../components/dashboard/DashboardStats';
import DashboardActions from '../components/dashboard/DashboardActions';

const DashboardScreen = ({ navigation }) => {
  const { accessToken, user } = useContext(AuthContext);
  const { evalCount, consultCount } = useDashboardData(accessToken);
  const actions = useDashboardActions(navigation);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <DashboardHeader greeting={actions.getGreeting()} user={user} />
      <DashboardStats evalCount={evalCount} consultCount={consultCount} />
      <DashboardActions
        evalCount={evalCount}
        consultCount={consultCount}
        {...actions}
      />
    </ScrollView>
  );
};

export default DashboardScreen;
