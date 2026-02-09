import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import RNFS from 'react-native-fs';
import RNPrint from 'react-native-print';
import { Buffer } from 'buffer';

import {
  getEvaluationDetail,
  downloadEvaluationPDF,
} from '../api/services/evaluation';

export default function useEvaluationDetail(accessToken, id) {
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);

  const fetchDetail = async (isRefresh = false) => {
    isRefresh ? setRefreshing(true) : setLoading(true);

    try {
      const res = await getEvaluationDetail(accessToken, id);
      setEvaluation(res);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const downloadPDF = async () => {
    try {
      global.Buffer = global.Buffer || Buffer;

      const arrayBuffer = await downloadEvaluationPDF(accessToken, id);
      const base64 = Buffer.from(arrayBuffer, 'binary').toString('base64');
      const file = `${RNFS.DocumentDirectoryPath}/evaluation_${id}.pdf`;

      await RNFS.writeFile(file, base64, 'base64');
      await RNPrint.print({ filePath: file });
    } catch {
      Alert.alert('Download Failed', 'Unable to generate PDF document.');
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  return {
    evaluation,
    loading,
    refreshing,
    error,
    fetchDetail,
    downloadPDF,
  };
}
