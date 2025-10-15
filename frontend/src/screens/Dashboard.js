import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {
  MessageSquareText,
  ClipboardList,
  ChevronRight,
  User,
  BarChart3,
  NotebookPen,
} from 'lucide-react-native';
import { getEvaluationCount } from '../api/services/evaluation';
import { getUserConsultations } from '../api/services/consultation';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles/dashboardStyle';
import { Dimensions } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const { accessToken, user } = useContext(AuthContext);
  const [evalCount, setEvalCount] = useState(0);
  const [consultCount, setConsultCount] = useState(0);

  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 360;
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const evalRes = await getEvaluationCount(accessToken);
        setEvalCount(evalRes);

        const consultRes = await getUserConsultations(accessToken);
        setConsultCount(consultRes?.length || 0);
      } catch (err) {
        console.error('Failed to fetch counts:', err);
      }
    };
    fetchCounts();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>{getGreeting()} 👋</Text>
          <Text style={styles.welcome}>
            Welcome back{user ? `, ${user.first_name || user.username}` : ''}
          </Text>
        </View>
        <View style={styles.avatar}>
          <User size={24} color="#5E72E4" />
        </View>
      </View>

      {/* Stats Overview */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <View style={[styles.statIcon, { backgroundColor: '#EBF5FF' }]}>
            <ClipboardList size={20} color="#5E72E4" />
          </View>
          <View style={styles.statText}>
            <Text
              style={[
                styles.statNumber,
                isSmallScreen && styles.statNumberSmall,
              ]}
            >
              {evalCount}
            </Text>
            <Text
              style={[styles.statLabel, isSmallScreen && styles.statLabelSmall]}
            >
              Evaluation
            </Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <View style={[styles.statIcon, { backgroundColor: '#F0FFF4' }]}>
            <BarChart3 size={20} color="#38A169" />
          </View>
          <View style={styles.statText}>
            <Text
              style={[
                styles.statNumber,
                isSmallScreen && styles.statNumberSmall,
              ]}
            >
              {consultCount}
            </Text>
            <Text
              style={[styles.statLabel, isSmallScreen && styles.statLabelSmall]}
            >
              Consultation
            </Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Options</Text>
        <Text style={styles.sectionSubtitle}>Choose what you'd like to do</Text>

        <View style={styles.actionsContainer}>
          <ActionCard
            title="Start Consultation"
            description="Submit academic consultation form"
            icon={<NotebookPen size={24} color="#5E72E4" />}
            onPress={() => navigation.navigate('Consultation')}
            color="#5E72E4"
          />

          <ActionCard
            title="Create Evaluation"
            description="Evaluate a Faculty or Personnel"
            icon={<MessageSquareText size={24} color="#5E72E4" />}
            onPress={() => navigation.navigate('Evaluation')}
            color="#5E72E4"
          />

          <ActionCard
            title="View Consultations"
            description={`Manage ${consultCount} submitted consultations`}
            icon={<BarChart3 size={24} color="#38A169" />}
            onPress={() => navigation.navigate('ConsultationList')}
            color="#38A169"
          />

          <ActionCard
            title="View Evaluations"
            description={`Manage ${evalCount} submitted evaluations`}
            icon={<ClipboardList size={24} color="#11C8EF" />}
            onPress={() => navigation.navigate('EvaluationList')}
            color="#11C8EF"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const ActionCard = ({ title, description, icon, onPress, color }) => (
  <TouchableOpacity
    style={styles.actionCard}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={[styles.actionIcon, { backgroundColor: `${color}15` }]}>
      {icon}
    </View>

    <View style={styles.actionContent}>
      <Text style={styles.actionTitle}>{title}</Text>
      <Text style={styles.actionDescription}>{description}</Text>
    </View>

    <View style={[styles.chevronContainer, { backgroundColor: `${color}15` }]}>
      <ChevronRight size={18} color={color} />
    </View>
  </TouchableOpacity>
);

export default DashboardScreen;
