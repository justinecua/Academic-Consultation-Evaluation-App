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
import { styles } from '../styles/dashboardStyle';
const { width } = Dimensions.get('window');

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.title}>A</Text>
        <Text style={styles.subtitle}>Select an action to begin</Text>
      </View> */}

      <View style={styles.cardContainer}>
        <Card
          title="Consultation"
          subtitle="Academic Consultation Form"
          icon={<MessageSquareText size={24} color="#5E72E4" />}
          onPress={() => navigation.navigate('Consultation')}
          accent="#5E72E4"
        />

        <Card
          title="Evaluation"
          subtitle="Classroom Instruction Form"
          icon={<ClipboardList size={24} color="#11C8EF" />}
          onPress={() => navigation.navigate('Evaluation')}
          accent="#11C8EF"
        />
      </View>
    </View>
  );
};

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

export default DashboardScreen;
