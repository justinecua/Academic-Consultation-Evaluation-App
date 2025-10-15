import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { Download, Calendar, Clock, MapPin } from 'lucide-react-native';
import {
  getConsultationDetail,
  downloadConsultationPDF,
} from '../../api/services/consultation';
import RNFS from 'react-native-fs';
import RNPrint from 'react-native-print';
import { styles } from '../../styles/consultationDetailScreenStyle';
import { Buffer } from 'buffer';
import * as Burnt from 'burnt';
import FileViewer from 'react-native-file-viewer';

const ConsultationDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { accessToken } = useContext(AuthContext);
  const [consultation, setConsultation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const formatDate = dateString => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
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

  const fetchDetail = async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    else setRefreshing(true);

    try {
      const res = await getConsultationDetail(accessToken, id);
      setConsultation(res);
    } catch (error) {
      Burnt.toast({
        title: 'Failed to load consultation details',
        preset: 'error',
      });
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

  const handleDownloadPDF = async () => {
    try {
      const arrayBuffer = await downloadConsultationPDF(accessToken, id);
      const base64Data = Buffer.from(arrayBuffer, 'binary').toString('base64');
      const localFile = `${RNFS.DocumentDirectoryPath}/consultation_${id}.pdf`;

      await RNFS.writeFile(localFile, base64Data, 'base64');

      await RNPrint.print({ filePath: localFile });
    } catch (error) {
      console.error('Download PDF error:', error);
      Burnt.toast({
        title: 'Failed to open PDF file',
        preset: 'error',
      });
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>Loading consultation details...</Text>
      </View>
    );
  }

  if (!consultation) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Failed to load consultation details
        </Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchDetail}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
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
          colors={['#2563EB']}
          tintColor="#2563EB"
        />
      }
      showsVerticalScrollIndicator={false}
    >
      {/* Header with Actions */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{consultation.student_name}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            onPress={handleDownloadPDF}
            style={styles.iconButton}
          >
            <Download size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Student Information Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Student Information</Text>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Student Name</Text>
            <Text style={styles.infoValue}>
              {consultation.student_name || '—'}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Course & Year</Text>
            <Text style={styles.infoValue}>
              {consultation.course_year || '—'}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>College</Text>
            <Text style={styles.infoValue}>{consultation.college || '—'}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Subject Grade</Text>
            <Text style={styles.infoValue}>
              {consultation.subject_grade || '—'}
            </Text>
          </View>
        </View>
      </View>

      {/* Academic Details Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Academic Details</Text>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Subject</Text>
            <Text style={styles.infoValue}>{consultation.subject || '—'}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Term</Text>
            <Text style={styles.infoValue}>{consultation.term || '—'}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Semester</Text>
            <Text style={styles.infoValue}>{consultation.semester || '—'}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Class Schedule</Text>
            <Text style={styles.infoValue}>
              {consultation.class_schedule || '—'}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.fullWidthRow}>
            <Text style={styles.infoLabel}>Course Description</Text>
            <Text style={styles.infoValue}>
              {consultation.course_description || '—'}
            </Text>
          </View>
        </View>
      </View>

      {/* Consultation Schedule Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Consultation Schedule</Text>
        </View>

        <View style={styles.scheduleContainer}>
          <View style={styles.scheduleItem}>
            <View style={[styles.scheduleIcon, { backgroundColor: '#EFF6FF' }]}>
              <Calendar size={16} color="#2563EB" />
            </View>
            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleLabel}>Date</Text>
              <Text style={styles.scheduleValue}>
                {formatDate(consultation.date)}
              </Text>
            </View>
          </View>

          <View style={styles.scheduleItem}>
            <View style={[styles.scheduleIcon, { backgroundColor: '#F0FDF4' }]}>
              <Clock size={16} color="#059669" />
            </View>
            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleLabel}>Time</Text>
              <Text style={styles.scheduleValue}>
                {formatTime(consultation.time)}
              </Text>
            </View>
          </View>

          <View style={styles.scheduleItem}>
            <View style={[styles.scheduleIcon, { backgroundColor: '#FEF2F2' }]}>
              <MapPin size={16} color="#DC2626" />
            </View>
            <View style={styles.scheduleContent}>
              <Text style={styles.scheduleLabel}>Venue</Text>
              <Text style={styles.scheduleValue}>
                {consultation.venue || '—'}
              </Text>
              <Text style={styles.scheduleSubtext}>
                Room {consultation.room_number || 'N/A'}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Academic Assessment Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Academic Assessment</Text>
        </View>

        <View style={styles.textContent}>
          <View style={styles.textSection}>
            <Text style={styles.textLabel}>Difficulties Identified</Text>
            <Text style={styles.textValue}>
              {consultation.difficulties_identified ||
                'No difficulties identified'}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.textSection}>
            <Text style={styles.textLabel}>Learning Assistance Provided</Text>
            <Text style={styles.textValue}>
              {consultation.learning_assistance ||
                'No learning assistance provided'}
            </Text>
          </View>
        </View>
      </View>

      {/* Resolution & Remarks Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Resolution & Remarks</Text>
        </View>

        <View style={styles.textContent}>
          <View style={styles.textSection}>
            <Text style={styles.textLabel}>Resolution</Text>
            <Text style={styles.textValue}>
              {consultation.resolution || 'No resolution provided'}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.textSection}>
            <Text style={styles.textLabel}>Remarks</Text>
            <Text style={styles.textValue}>
              {consultation.remarks || 'No remarks provided'}
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Spacing */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

export default ConsultationDetailScreen;
