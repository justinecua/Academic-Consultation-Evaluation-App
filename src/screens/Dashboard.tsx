import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  MessageSquareText,
  ClipboardList,
  ChevronRight,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.title}>A</Text>
        <Text style={styles.subtitle}>Select an action to begin</Text>
      </View> */}

      {/* Two Primary Cards */}
      <View style={styles.cardContainer}>
        <Card
          title="Consultation"
          subtitle="Academic Consultation Form"
          icon={<MessageSquareText size={24} color="#5E72E4" />}
          onPress={() => navigation.navigate('ConsultationFormScreen')}
          accent="#5E72E4"
        />

        <Card
          title="Evaluation"
          subtitle="Classroom Instruction Form"
          icon={<ClipboardList size={24} color="#11C8EF" />}
          onPress={() => navigation.navigate('EvaluationForm')}
          accent="#11C8EF"
        />
      </View>
    </View>
  );
};

// Card Component with Lucide Icons
const Card = ({ title, subtitle, icon, onPress, accent }) => (
  <TouchableOpacity
    style={[styles.card, { borderLeftColor: accent }]}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <View style={[styles.iconContainer, { backgroundColor: `${accent}10` }]}>
      {icon}
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
    <ChevronRight size={20} color="#CBD5E0" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 32,
  },
  header: {
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1A202C',
    letterSpacing: -0.8,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#718096',
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 15,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#718096',
    lineHeight: 20,
  },
});

export default DashboardScreen;
