import { useContext } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Text,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { useConsultations } from '../../hooks/useConsultations';
import ConsultationCard from '../../components/consultation/ConsultationCard';
import ConsultationEmptyState from '../../components/consultation/ConsultationEmptyState';
import ConsultationSeparator from '../../components/consultation/ConsultationSeparator';
import {
  consultationStyles as styles,
  COLORS,
} from '../../styles/consultationStyles';

const ConsultationListScreen = ({ navigation }) => {
  const { accessToken } = useContext(AuthContext);
  const { consultations, loading, refreshing, errorMsg, refetch, refresh } =
    useConsultations(accessToken);

  if (loading) {
    return (
      <View style={styles.loadingWrap}>
        <StatusBar barStyle="light-content" backgroundColor="#0D2460" />
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading consultations…</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D2460" />

      <FlatList
        data={consultations}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ConsultationCard
            item={item}
            onPress={() =>
              navigation.navigate('ConsultationDetail', {
                id: item.id,
                onDeleted: () => refetch(),
              })
            }
          />
        )}
        refreshing={refreshing}
        onRefresh={refresh}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.listContent,
          consultations.length === 0 && styles.listContentEmpty,
        ]}
        ItemSeparatorComponent={ConsultationSeparator}
        ListEmptyComponent={
          <ConsultationEmptyState errorMsg={errorMsg} onRetry={refetch} />
        }
      />
    </View>
  );
};

export default ConsultationListScreen;
