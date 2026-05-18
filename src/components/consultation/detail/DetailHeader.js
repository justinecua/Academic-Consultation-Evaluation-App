import { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Download, Trash2 } from 'lucide-react-native';

import { styles } from '../../../styles/consultationDetailScreenStyle';
import { AuthContext } from '../../../context/AuthContext';
import { handleDownloadPDF } from './consultationDetailUtils';
import { deleteConsultation } from '../../../api/services/consultation';

const DetailHeader = ({ consultation, id, navigation, onDeleted }) => {
  const { accessToken } = useContext(AuthContext);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    Alert.alert(
      'Delete Consultation',
      'Are you sure you want to delete this consultation?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              setDeleting(true);
              await deleteConsultation(accessToken, id);

              if (onDeleted) onDeleted();

              Alert.alert('Deleted', 'Consultation deleted successfully.');
              navigation.goBack();
            } catch (err) {
              Alert.alert('Delete Failed', String(err));
            } finally {
              setDeleting(false);
            }
          },
        },
      ],
    );
  };
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle} numberOfLines={2}>
        {consultation.student_name}
      </Text>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          onPress={() => handleDownloadPDF(accessToken, id)}
          style={styles.iconButton}
        >
          <Download size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDelete}
          style={[styles.iconButton, styles.deleteButton]}
          disabled={deleting}
        >
          <Trash2 size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailHeader;
