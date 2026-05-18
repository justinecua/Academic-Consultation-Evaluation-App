import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Download, Trash2 } from 'lucide-react-native';
import { styles } from '../../../../styles/evaluationDetailScreen';
import { deleteEvaluation } from '../../../../api/services/evaluation';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';

export default function EvaluationHeader({
  teacher,
  subject,
  onDownload,
  evaluationId,
  navigation,
  onDeleted,
}) {
  const { accessToken } = useContext(AuthContext);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    Alert.alert(
      'Delete Evaluation',
      'Are you sure you want to delete this evaluation?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              setDeleting(true);
              await deleteEvaluation(accessToken, evaluationId);

              if (onDeleted) onDeleted();

              Alert.alert('Deleted', 'Evaluation deleted successfully.');
              navigation.goBack();
            } catch (err) {
              Alert.alert(
                'Delete Failed',
                err?.message || err?.error || String(err),
              );
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
      <View style={{ flex: 1, marginRight: 12 }}>
        <Text style={styles.headerTitle} numberOfLines={2}>
          {teacher}
        </Text>
        <Text style={styles.headerSubtitle}>
          {subject || 'No subject specified'}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 8 }}>
        <TouchableOpacity onPress={onDownload} style={styles.iconButton}>
          <Download size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDelete}
          style={styles.iconButton}
          disabled={deleting}
        >
          <Trash2 size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
