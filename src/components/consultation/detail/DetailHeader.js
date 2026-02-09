import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Download } from 'lucide-react-native';

import { styles } from '../../../styles/consultationDetailScreenStyle';
import { AuthContext } from '../../../context/AuthContext';
import { handleDownloadPDF } from './consultationDetailUtils';

const DetailHeader = ({ consultation, id }) => {
  const { accessToken } = useContext(AuthContext);

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{consultation.student_name}</Text>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          onPress={() => handleDownloadPDF(accessToken, id)}
          style={styles.iconButton}
        >
          <Download size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailHeader;
