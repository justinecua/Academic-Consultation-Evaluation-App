import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from '../../../styles/consultFormScreenStyle';

const SubmitButton = ({ submitting, handleSubmit }) => {
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        submitting && { backgroundColor: '#A0AEC0' },
      ]}
      onPress={handleSubmit}
      disabled={submitting}
    >
      {submitting ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.submitText}>Submit Consultation</Text>
      )}
    </TouchableOpacity>
  );
};

export default SubmitButton;
