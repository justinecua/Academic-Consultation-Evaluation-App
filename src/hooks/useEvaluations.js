import { useEffect, useState } from 'react';
import { getUserEvaluations } from '../api/services/evaluation';

export const useEvaluations = accessToken => {
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

  return {
    evaluations,
    loading,
    refreshing,
    refresh: () => fetchData(true),
    refetch: () => fetchData(false),
  };
};
