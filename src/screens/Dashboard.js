import React, { useContext, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles/dashboardStyle';
import { useDashboardData } from '../hooks/useDashboardData';
import { useDashboardActions } from '../hooks/useDashboardActions';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardStats from '../components/dashboard/DashboardStats';
import DashboardActions from '../components/dashboard/DashboardActions';
import ScreenContainer from './ScreenContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = ({ navigation }) => {
  const { accessToken, user } = useContext(AuthContext);
  const { evalCount, consultCount, refetch } = useDashboardData(accessToken);
  const actions = useDashboardActions(navigation);

  useFocusEffect(
    useCallback(() => {
      if (refetch) {
        refetch();
      }
    }, [refetch]),
  );

  return (
    <ScreenContainer style={styles.safe}>
      <SafeAreaView style={styles.safeInner}>
        <DashboardHeader greeting={actions.getGreeting()} user={user} />
        <DashboardStats evalCount={evalCount} consultCount={consultCount} />
        <DashboardActions
          evalCount={evalCount}
          consultCount={consultCount}
          {...actions}
        />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default DashboardScreen;
