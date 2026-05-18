import { useEffect, useState, useCallback } from 'react';
import { getEvaluationCount } from '../api/services/evaluation';
import { getUserConsultations } from '../api/services/consultation';

export const useDashboardData = accessToken => {
  const [evalCount, setEvalCount] = useState(0);
  const [consultCount, setConsultCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCounts = useCallback(async () => {
    if (!accessToken) return;
    setLoading(true);

    try {
      const evalRes = await getEvaluationCount(accessToken);
      setEvalCount(evalRes);

      const consultRes = await getUserConsultations(accessToken);
      setConsultCount(consultRes?.length || 0);
    } catch (err) {
      console.error('Failed to fetch counts:', err);
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  return { evalCount, consultCount, loading, refetch: fetchCounts };
};
