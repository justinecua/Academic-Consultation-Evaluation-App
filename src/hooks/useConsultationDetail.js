import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { getConsultationDetail } from '../api/services/consultation';

export const useConsultationDetail = (accessToken, id) => {
  const [consultation, setConsultation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDetail = async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    else setRefreshing(true);

    try {
      const res = await getConsultationDetail(accessToken, id);
      setConsultation(res);
    } catch {
      Alert.alert('Error', 'Failed to load consultation details.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  return {
    consultation,
    loading,
    refreshing,
    refetch: () => fetchDetail(false),
    refresh: () => fetchDetail(true),
  };
};
