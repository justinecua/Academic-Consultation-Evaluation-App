import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from '../../../styles/consultationDetailScreenStyle';

const LoadingState = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#2563EB" />
    <Text style={styles.loadingText}>Loading consultation details...</Text>
  </View>
);

export default LoadingState;
