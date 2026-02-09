import RNFS from 'react-native-fs';
import RNPrint from 'react-native-print';
import { Buffer } from 'buffer';
import { downloadConsultationPDF } from '../../../api/services/consultation';
import { Alert } from 'react-native';

export const formatDate = d =>
  d
    ? new Date(d).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'Not specified';

export const formatTime = t =>
  t
    ? new Date(`2000-01-01T${t}`).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Not specified';

export const handleDownloadPDF = async (token, id) => {
  try {
    const arrayBuffer = await downloadConsultationPDF(token, id);
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    const path = `${RNFS.DocumentDirectoryPath}/consultation_${id}.pdf`;

    await RNFS.writeFile(path, base64, 'base64');
    await RNPrint.print({ filePath: path });
  } catch (e) {
    Alert.alert('Error', 'Failed to download PDF.');
  }
};
