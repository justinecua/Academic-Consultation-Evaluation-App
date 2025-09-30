import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  MessageSquareText,
  ClipboardList,
  ChevronRight,
  User,
  BarChart3,
} from 'lucide-react-native';
import { getEvaluationCount } from '../api/services/evaluation';
import { AuthContext } from '../context/AuthContext';

const DashboardScreen = ({ navigation }) => {
  const { accessToken, user } = useContext(AuthContext);
  const [evalCount, setEvalCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await getEvaluationCount(accessToken);
        setEvalCount(res);
      } catch (err) {
        console.error('Failed to fetch evaluation count:', err);
      }
    };
    fetchCount();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>{getGreeting()} 👋</Text>
          <Text style={styles.welcome}>
            Welcome back{user ? `, ${user.name || user.username}` : ''}
          </Text>
          <Text style={styles.subtitle}>Ready to continue your work?</Text>
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
            <Text style={styles.statNumber}>{evalCount}</Text>
            <Text style={styles.statLabel}>Evaluation</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <View style={[styles.statIcon, { backgroundColor: '#F0FFF4' }]}>
            <BarChart3 size={20} color="#38A169" />
          </View>
          <View style={styles.statText}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Consultation</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <Text style={styles.sectionSubtitle}>Choose what you'd like to do</Text>

        <View style={styles.actionsContainer}>
          <ActionCard
            title="Start Consultation"
            description="Submit academic consultation form"
            icon={<MessageSquareText size={24} color="#5E72E4" />}
            onPress={() => navigation.navigate('Consultation')}
            color="#5E72E4"
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

      {/* Recent Activity (Optional - can be expanded later) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderText}>
            Your recent activities will appear here
          </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 24,
    paddingBottom: 20,
    backgroundColor: '#F8FAFC',
  },
  headerContent: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    color: '#718096',
    fontWeight: '500',
    marginBottom: 4,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    fontWeight: '400',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EBF5FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#F8FAFC',
    gap: 12,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  statText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 2,
    marginRight: 10,
  },
  statLabel: {
    fontSize: 12,
    color: '#718096',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  section: {
    padding: 24,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 20,
  },
  actionsContainer: {
    gap: 12,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 18,
  },
  chevronContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  placeholderCard: {
    backgroundColor: '#F7FAFC',
    padding: 32,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 14,
    color: '#A0AEC0',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
