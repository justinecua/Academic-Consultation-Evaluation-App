import { useEffect, useState } from 'react';
import { getEvaluationCount } from '../api/services/evaluation';
import { getUserConsultations } from '../api/services/consultation';

export const useDashboardData = accessToken => {
  const [evalCount, setEvalCount] = useState(0);
  const [consultCount, setConsultCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const evalRes = await getEvaluationCount(accessToken);
        setEvalCount(evalRes);

        const consultRes = await getUserConsultations(accessToken);
        setConsultCount(consultRes?.length || 0);
      } catch (err) {
        console.error('Failed to fetch counts:', err);
      }
    };

    if (accessToken) fetchCounts();
  }, [accessToken]);

  return { evalCount, consultCount };
};
