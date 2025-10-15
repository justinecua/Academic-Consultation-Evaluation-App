import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import {
  User,
  BookOpen,
  Building,
  MapPin,
  Calendar,
  MessageSquare,
  Download,
} from 'lucide-react-native';
import { styles } from '../../styles/evaluationDetailScreen';
import {
  getEvaluationDetail,
  downloadEvaluationPDF,
} from '../../api/services/evaluation';
import RNFS from 'react-native-fs';
import RNPrint from 'react-native-print';
import * as Burnt from 'burnt';
import { Buffer } from 'buffer';

const EvaluationDetailScreen = ({ route }) => {
  const { id } = route.params;
  const { accessToken } = useContext(AuthContext);
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      global.Buffer = global.Buffer || Buffer;

      const arrayBuffer = await downloadEvaluationPDF(accessToken, id);
      const base64Data = Buffer.from(arrayBuffer, 'binary').toString('base64');
      const localFile = `${RNFS.DocumentDirectoryPath}/evaluation_${id}.pdf`;

      await RNFS.writeFile(localFile, base64Data, 'base64');
      await RNPrint.print({ filePath: localFile });
    } catch (error) {
      console.error('Download Evaluation PDF error:', error);
      Burnt.toast({
        title: 'Failed to open PDF file',
        preset: 'error',
      });
    }
  };

  const fetchDetail = async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    else setRefreshing(true);

    try {
      const res = await getEvaluationDetail(accessToken, id);
      console.log(res);
      setEvaluation(res);
    } catch (error) {
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
    if (rating >= 4) return '#38A169';
    if (rating >= 3) return '#D69E2E';
    return '#E53E3E';
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
      {/* Header with Actions */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{evaluation.teacher_name}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            onPress={handleDownloadPDF}
            style={styles.iconButton}
          >
            <Download size={20} color="#6B7280" />
          </TouchableOpacity>
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
          {/* <Text style={styles.ratingLabel}>
            {getRatingLabel(evaluation.average_rating)}
          </Text> */}
          <Text style={styles.ratingSubtext}>
            Based on {evaluation.responses_detail?.length || 0} responses
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
        <Text style={styles.cardTitle}>Detailed Responses</Text>
        {evaluation.responses_detail?.map((resp, index) => (
          <View
            key={resp.id}
            style={[
              styles.responseItem,
              index < evaluation.responses?.length - 1 && styles.responseBorder,
            ]}
          >
            {/* Question */}
            <Text style={styles.question}>{resp.question?.text}</Text>

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
