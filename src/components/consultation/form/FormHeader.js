import { View, Text } from 'react-native';
import { styles } from '../../../styles/consultFormScreenStyle';

const FormHeader = () => {
  return (
    <View style={styles.MainSection}>
      <Text style={styles.mainTitle}>Academic Consultation Form</Text>
    </View>
  );
};

export default FormHeader;
