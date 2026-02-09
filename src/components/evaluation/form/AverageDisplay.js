import { View, Text } from 'react-native';
import { styles } from '../../../styles/evalFormScreenStyle';

const AverageDisplay = ({ average }) => {
  return (
    <View style={styles.RatingScaleInstruction}>
      <Text style={styles.RatingScaleInstructionText}>AVERAGE: {average}</Text>
    </View>
  );
};

export default AverageDisplay;
