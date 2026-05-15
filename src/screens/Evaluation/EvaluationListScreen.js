import { useContext } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../styles/evaluationListScreenStyle';
import { useEvaluations } from '../../hooks/useEvaluations';
import EvaluationCard from '../../components/evaluation/list/EvaluationCard';
import EvaluationEmptyState from '../../components/evaluation/list/EvaluationEmptyState';
import EvaluationSeparator from '../../components/evaluation/list/EvaluationSeparator';

const EvaluationListScreen = ({ navigation }) => {
  const { accessToken } = useContext(AuthContext);
  const { evaluations, loading, refreshing, refresh } =
    useEvaluations(accessToken);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0D2460" />
        <Text style={styles.loadingText}>Loading evaluations...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={evaluations}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <EvaluationCard
            item={item}
            onPress={() =>
              item.id &&
              navigation.navigate('EvaluationDetail', { id: item.id })
            }
          />
        )}
        ItemSeparatorComponent={EvaluationSeparator}
        ListEmptyComponent={<EvaluationEmptyState onRefresh={refresh} />}
        contentContainerStyle={[
          { paddingTop: 16, paddingBottom: 100 },
          evaluations.length === 0 && styles.emptyList,
        ]}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={refresh}
      />
    </View>
  );
};

export default EvaluationListScreen;
