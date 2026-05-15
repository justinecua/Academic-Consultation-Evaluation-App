import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from '../../../styles/consultFormScreenStyle';

const SubmitButton = ({ submitting, handleSubmit }) => {
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        submitting && { backgroundColor: '#8096B8' },
      ]}
      onPress={handleSubmit}
      disabled={submitting}
      activeOpacity={0.8}
    >
      {submitting ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.submitText}>SUBMIT CONSULTATION</Text>
      )}
    </TouchableOpacity>
  );
};

export default SubmitButton;
