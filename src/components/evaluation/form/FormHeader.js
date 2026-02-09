import { View, Text } from 'react-native';
import { styles } from '../../../styles/evalFormScreenStyle';

const FormHeader = () => {
  return (
    <View style={styles.MainSection}>
      <Text style={styles.mainTitle}>
        Evaluation for Classroom Instruction Form
      </Text>
    </View>
  );
};

export default FormHeader;
