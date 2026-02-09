import { useCallback, useEffect, useState } from 'react';
import { getUserConsultations } from '../api/services/consultation';

export const useConsultations = accessToken => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = useCallback(
    async (isRefresh = false) => {
      if (!accessToken) {
        setConsultations([]);
        setLoading(false);
        setRefreshing(false);
        setErrorMsg('Missing session. Please log in again.');
        return;
      }

      if (!isRefresh) setLoading(true);
      else setRefreshing(true);

      setErrorMsg('');

      try {
        const res = await getUserConsultations(accessToken);
        setConsultations(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error('Failed to fetch consultations:', error);
        setConsultations([]);
        setErrorMsg('Couldn’t load consultations. Pull to refresh.');
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [accessToken],
  );

  useEffect(() => {
    fetchData(false);
  }, [fetchData]);

  return {
    consultations,
    loading,
    refreshing,
    errorMsg,
    refetch: () => fetchData(false),
    refresh: () => fetchData(true),
  };
};
