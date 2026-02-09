import { View, Text } from 'react-native';
import { styles } from '../../../styles/consultationDetailScreenStyle';

const Row = ({ label, value }) => (
  <>
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value || '—'}</Text>
    </View>
    <View style={styles.divider} />
  </>
);

const InfoCard = ({ consultation }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>Student Information</Text>
    </View>

    <View style={styles.infoGrid}>
      <Row label="Student Name" value={consultation.student_name} />
      <Row label="Course & Year" value={consultation.course_year} />
      <Row label="College" value={consultation.college} />
      <Row label="Subject Grade" value={consultation.subject_grade} />
    </View>
  </View>
);

export default InfoCard;
