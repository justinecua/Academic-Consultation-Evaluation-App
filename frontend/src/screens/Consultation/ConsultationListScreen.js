import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { getUserConsultations } from '../../api/services/consultation';
import { AuthContext } from '../../context/AuthContext';
import { ChevronRight, Calendar, BookOpen, User } from 'lucide-react-native';

const ConsultationListScreen = ({ navigation }) => {
  const { accessToken } = useContext(AuthContext);
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    else setRefreshing(true);

    try {
      const res = await getUserConsultations(accessToken);
      setConsultations(res || []);
    } catch (error) {
      console.error('Failed to fetch consultations:', error);
      setConsultations([]);
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ConsultationDetail', { id: item.id })}
      activeOpacity={0.7}
    >
      <View style={styles.itemContent}>
        <View style={styles.itemHeader}>
          <View style={styles.teacherInfo}>
            <User size={16} color="#718096" />
            <Text style={styles.teacherName} numberOfLines={1}>
              {item.student_name || 'Unknown Student'}
            </Text>
          </View>
        </View>

        <Text style={styles.title}>
          {item.subject || `Consultation #${item.id}`}
        </Text>

        <View style={styles.itemFooter}>
          <View style={styles.footerItem}>
            <BookOpen size={14} color="#718096" />
            <Text style={styles.footerText}>
              {item.course_description || 'No description'}
            </Text>
          </View>

          <View style={styles.footerItem}>
            <Calendar size={14} color="#718096" />
            <Text style={styles.footerText}>{formatDate(item.created_at)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.chevronContainer}>
        <ChevronRight size={20} color="#CBD5E0" />
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5E72E4" />
        <Text style={styles.loadingText}>Loading consultations...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={consultations}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={consultations.length === 0 && styles.emptyList}
      />
    </View>
  );
};

export default ConsultationListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: { marginTop: 12, color: '#718096' },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  itemContent: { flex: 1 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  teacherInfo: { flexDirection: 'row', alignItems: 'center' },
  teacherName: { marginLeft: 6, fontWeight: '500', color: '#2D3748' },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    color: '#1A202C',
  },
  itemFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  footerItem: { flexDirection: 'row', alignItems: 'center' },
  footerText: { marginLeft: 6, color: '#718096' },
  chevronContainer: { justifyContent: 'center' },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
