import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { getEvaluationDetail } from '../../api/services/evaluation';
import { AuthContext } from '../../context/AuthContext';
import {
  User,
  BookOpen,
  Building,
  MapPin,
  Calendar,
  Clock,
  MessageSquare,
  Star,
  Award,
  FileText,
} from 'lucide-react-native';

const EvaluationDetailScreen = ({ route }) => {
  const { id } = route.params;
  const { accessToken } = useContext(AuthContext);
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDetail = async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    else setRefreshing(true);

    try {
      const res = await getEvaluationDetail(accessToken, id);
      setEvaluation(res);
    } catch (error) {
      console.error('Failed to fetch evaluation details:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const onRefresh = () => {
    fetchDetail(true);
  };

  const formatDate = dateString => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = timeString => {
    if (!timeString) return 'Not specified';
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getRatingColor = rating => {
    if (rating >= 4) return '#38A169'; // Green
    if (rating >= 3) return '#D69E2E'; // Yellow
    return '#E53E3E'; // Red
  };

  const getOverallRatingColor = rating => {
    if (rating >= 4) return '#38A169';
    if (rating >= 3) return '#D69E2E';
    return '#E53E3E';
  };

  const getRatingLabel = rating => {
    if (rating === 5) return 'Excellent';
    if (rating === 4) return 'Very Good';
    if (rating === 3) return 'Good';
    if (rating === 2) return 'Fair';
    if (rating === 1) return 'Poor';
    if (rating === 0) return 'Not Applicable';
    return 'N/A';
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5E72E4" />
        <Text style={styles.loadingText}>Loading evaluation details...</Text>
      </View>
    );
  }

  if (!evaluation) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load evaluation details</Text>
        <Text style={styles.errorSubtext}>Please try again later</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#5E72E4']}
          tintColor="#5E72E4"
        />
      }
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Evaluation Details</Text>
          <Text style={styles.subtitle}>Observation #{evaluation.id}</Text>
        </View>
        <View
          style={[
            styles.ratingBadge,
            {
              backgroundColor: `${getOverallRatingColor(
                evaluation.average_rating,
              )}15`,
            },
          ]}
        >
          <Star
            size={16}
            color={getOverallRatingColor(evaluation.average_rating)}
            fill={getOverallRatingColor(evaluation.average_rating)}
          />
          <Text
            style={[
              styles.ratingBadgeText,
              { color: getOverallRatingColor(evaluation.average_rating) },
            ]}
          >
            {evaluation.average_rating?.toFixed(1) || 'N/A'}
          </Text>
        </View>
      </View>

      {/* Basic Information Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Basic Information</Text>

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <View style={styles.infoLabelContainer}>
                <User size={16} color="#718096" />
                <Text style={styles.infoLabel}>Teacher</Text>
              </View>
              <Text style={styles.infoValue}>
                {evaluation.teacher_name || 'Not specified'}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <View style={styles.infoLabelContainer}>
                <BookOpen size={16} color="#718096" />
                <Text style={styles.infoLabel}>Subject</Text>
              </View>
              <Text style={styles.infoValue}>
                {evaluation.subject || 'Not specified'}
              </Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <View style={styles.infoLabelContainer}>
                <Building size={16} color="#718096" />
                <Text style={styles.infoLabel}>College</Text>
              </View>
              <Text style={styles.infoValue}>
                {evaluation.college || 'Not specified'}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <View style={styles.infoLabelContainer}>
                <MapPin size={16} color="#718096" />
                <Text style={styles.infoLabel}>Room</Text>
              </View>
              <Text style={styles.infoValue}>
                {evaluation.room_number || 'Not specified'}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Schedule Information Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Schedule</Text>

        <View style={styles.scheduleSection}>
          <View style={styles.scheduleItem}>
            <View style={styles.scheduleHeader}>
              <Calendar size={18} color="#5E72E4" />
              <Text style={styles.scheduleTitle}>Observation</Text>
            </View>
            <Text style={styles.scheduleDate}>
              {formatDate(evaluation.date)}
            </Text>
            <Text style={styles.scheduleTime}>
              {formatTime(evaluation.time_of_observation)}
            </Text>
          </View>

          <View style={styles.scheduleDivider} />

          <View style={styles.scheduleItem}>
            <View style={styles.scheduleHeader}>
              <MessageSquare size={18} color="#11C8EF" />
              <Text style={styles.scheduleTitle}>Conference</Text>
            </View>
            <Text style={styles.scheduleDate}>
              {formatDate(evaluation.date_of_conference)}
            </Text>
            <Text style={styles.scheduleTime}>
              {formatTime(evaluation.time_of_conference)}
            </Text>
          </View>
        </View>
      </View>

      {/* Overall Rating Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Overall Rating</Text>
        <View style={styles.ratingContainer}>
          <View
            style={[
              styles.ratingCircle,
              {
                backgroundColor: getOverallRatingColor(
                  evaluation.average_rating,
                ),
              },
            ]}
          >
            <Text style={styles.ratingNumber}>
              {evaluation.average_rating?.toFixed(1) || 'N/A'}
            </Text>
          </View>
          <Text style={styles.ratingLabel}>
            {getRatingLabel(evaluation.average_rating)}
          </Text>
          <Text style={styles.ratingSubtext}>
            Based on {evaluation.responses?.length || 0} criteria
          </Text>
        </View>
      </View>

      {/* Comments Card */}
      {evaluation.other_comments && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Additional Comments</Text>
          <View style={styles.commentsContainer}>
            <MessageSquare size={20} color="#718096" />
            <Text style={styles.comments}>{evaluation.other_comments}</Text>
          </View>
        </View>
      )}

      {/* Responses Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Detailed Responses ({evaluation.responses?.length || 0})
        </Text>
        {evaluation.responses?.map((resp, index) => (
          <View
            key={resp.id}
            style={[
              styles.responseItem,
              index < evaluation.responses.length - 1 && styles.responseBorder,
            ]}
          >
            {/* Question */}
            <Text style={styles.question}>
              {resp.question?.text || 'Question not available'}
            </Text>

            {/* Rating and Remarks Container */}
            <View style={styles.responseDetails}>
              {/* Rating Section */}
              <View style={styles.ratingSection}>
                <View
                  style={[
                    styles.ratingPill,
                    { backgroundColor: `${getRatingColor(resp.rating)}15` },
                  ]}
                >
                  <Text
                    style={[
                      styles.ratingText,
                      { color: getRatingColor(resp.rating) },
                    ]}
                  >
                    {resp.rating}/5
                  </Text>
                </View>
                <Text style={styles.ratingDescription}>
                  {getRatingLabel(resp.rating)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Spacing */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

export default EvaluationDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#718096',
    fontWeight: '500',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorSubtext: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 24,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    fontWeight: '500',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 12,
  },
  ratingBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    marginBottom: 0,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
  },
  infoSection: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  infoItem: {
    flex: 1,
  },
  infoLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 12,
    color: '#718096',
    fontWeight: '500',
    marginLeft: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 16,
    color: '#2D3748',
    fontWeight: '500',
  },
  scheduleSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleItem: {
    flex: 1,
    alignItems: 'center',
  },
  scheduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  scheduleTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
    marginLeft: 6,
  },
  scheduleDate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 2,
  },
  scheduleTime: {
    fontSize: 14,
    color: '#718096',
  },
  scheduleDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 20,
  },
  ratingContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  ratingCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  ratingLabel: {
    fontSize: 18,
    color: '#2D3748',
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingSubtext: {
    fontSize: 14,
    color: '#718096',
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  comments: {
    flex: 1,
    fontSize: 16,
    color: '#4A5568',
    lineHeight: 22,
    marginLeft: 12,
    fontStyle: 'italic',
  },
  responseItem: {
    paddingVertical: 16,
  },
  responseBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
  },
  question: {
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 16,
    lineHeight: 22,
    fontWeight: '500',
  },
  responseDetails: {
    flexDirection: 'row',
    gap: 16,
  },
  ratingSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },

  remarksSection: {
    flex: 2,
    alignItems: 'flex-start',
  },
  ratingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 12,
    color: '#718096',
    fontWeight: '600',
    marginLeft: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  ratingPill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  ratingDescription: {
    fontSize: 14,
    color: '#718096',
    fontStyle: 'italic',
  },
  remarksContainer: {
    backgroundColor: '#F7FAFC',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: '100%',
  },
  remarks: {
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 20,
  },
  noRemarksContainer: {
    backgroundColor: '#F7FAFC',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    width: '100%',
  },
  noRemarks: {
    fontSize: 14,
    color: '#CBD5E0',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  bottomSpacing: {
    height: 20,
  },
});
