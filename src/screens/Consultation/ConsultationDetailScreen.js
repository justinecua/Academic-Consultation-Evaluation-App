import { useContext } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../styles/consultationDetailScreenStyle';
import { useConsultationDetail } from '../../hooks/useConsultationDetail';
import LoadingState from '../../components/consultation/detail/LoadingState';
import ErrorState from '../../components/consultation/detail/ErrorState';
import DetailHeader from '../../components/consultation/detail/DetailHeader';
import InfoCard from '../../components/consultation/detail/InfoCard';
import ScheduleCard from '../../components/consultation/detail/ScheduleCard';
import TextSectionCard from '../../components/consultation/detail/TextSectionCard';

const ConsultationDetailScreen = ({ route, navigation }) => {
  const { id, onDeleted } = route.params;
  const { accessToken } = useContext(AuthContext);
  const { consultation, loading, refreshing, refetch, refresh } =
    useConsultationDetail(accessToken, id);

  if (loading) return <LoadingState />;
  if (!consultation) return <ErrorState onRetry={refetch} />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: 8, paddingBottom: 100 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refresh}
          tintColor="#0D2460"
          colors={['#0D2460']}
        />
      }
      showsVerticalScrollIndicator={false}
    >
      <DetailHeader
        consultation={consultation}
        id={id}
        navigation={navigation}
        onDeleted={onDeleted}
      />
      <InfoCard consultation={consultation} />
      <ScheduleCard consultation={consultation} />
      <TextSectionCard consultation={consultation} />
      <ScrollView style={styles.bottomSpacing} />
    </ScrollView>
  );
};

export default ConsultationDetailScreen;
