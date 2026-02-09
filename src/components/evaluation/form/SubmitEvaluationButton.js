import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from '../../../styles/evalFormScreenStyle';

const SubmitEvaluationButton = ({ submitting, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.submitButton,
        submitting && { backgroundColor: '#A0AEC0' },
      ]}
      onPress={onPress}
      disabled={submitting}
    >
      {submitting ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.submitText}>SUBMIT EVALUATION</Text>
      )}
    </TouchableOpacity>
  );
};

export default SubmitEvaluationButton;
