import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { getUserEvaluations } from '../../api/services/evaluation';
import { AuthContext } from '../../context/AuthContext';
import { ChevronRight, Calendar, User, BookOpen } from 'lucide-react-native';

const EvaluationListScreen = ({ navigation }) => {
  const { accessToken } = useContext(AuthContext);
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    else setRefreshing(true);

    try {
      const res = await getUserEvaluations(accessToken);
      setEvaluations(res || []);
    } catch (error) {
      console.error('Failed to fetch evaluations:', error);
      setEvaluations([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    fetchData(true);
  };

  const formatDate = dateString => {
    if (!dateString) return 'No date';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getRatingColor = rating => {
    if (rating >= 4) return '#38A169';
    if (rating >= 3) return '#D69E2E';
    return '#E53E3E';
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (item.id) {
          navigation.navigate('EvaluationDetail', { id: item.id });
        }
      }}
      activeOpacity={0.7}
    >
      <View style={styles.itemContent}>
        <View style={styles.itemHeader}>
          <View style={styles.teacherInfo}>
            <User size={16} color="#718096" />
            <Text style={styles.teacherName} numberOfLines={1}>
              {item.teacher_name || 'Unknown Teacher'}
            </Text>
          </View>
          {item.average_rating && (
            <View
              style={[
                styles.ratingPill,
                { backgroundColor: `${getRatingColor(item.average_rating)}15` },
              ]}
            >
              <Text
                style={[
                  styles.ratingText,
                  { color: getRatingColor(item.average_rating) },
                ]}
              >
                {item.average_rating.toFixed(1)}
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.title}>
          {item.subject || `Evaluation #${item.id}`}
        </Text>

        <View style={styles.itemFooter}>
          <View style={styles.footerItem}>
            <BookOpen size={14} color="#718096" />
            <Text style={styles.footerText}>
              {item.college || 'No college'}
            </Text>
          </View>

          <View style={styles.footerItem}>
            <Calendar size={14} color="#718096" />
            <Text style={styles.footerText}>{formatDate(item.date)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.chevronContainer}>
        <ChevronRight size={20} color="#CBD5E0" />
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <View style={styles.emptyIcon}>
        <BookOpen size={48} color="#CBD5E0" />
      </View>
      <Text style={styles.emptyTitle}>No Evaluations</Text>
      <Text style={styles.emptySubtitle}>
        You haven't submitted any evaluations yet.
      </Text>
      <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5E72E4" />
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
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={evaluations.length === 0 && styles.emptyList}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default EvaluationListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 24,
    paddingBottom: 1,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#718096',
    fontWeight: '400',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#718096',
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    marginTop: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  teacherName: {
    fontSize: 14,
    color: '#4A5568',
    fontWeight: '500',
    marginLeft: 6,
    flex: 1,
  },
  ratingPill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 12,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#718096',
    marginLeft: 6,
  },
  chevronContainer: {
    marginLeft: 12,
  },
  separator: {
    height: 8,
  },
  emptyList: {
    flexGrow: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    paddingTop: 80,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F7FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  refreshButton: {
    backgroundColor: '#5E72E4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  refreshButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
