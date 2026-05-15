import React from 'react';
import { View, Text } from 'react-native';
import { Calendar, Clock, MapPin } from 'lucide-react-native';

import { styles } from '../../../styles/consultationDetailScreenStyle';
import { formatDate, formatTime } from './consultationDetailUtils';

const ScheduleItem = ({ icon, label, value, sub }) => (
  <View style={styles.scheduleItem}>
    <View style={styles.scheduleIcon}>{icon}</View>
    <View style={styles.scheduleContent}>
      <Text style={styles.scheduleLabel}>{label}</Text>
      <Text style={styles.scheduleValue}>{value}</Text>
      {!!sub && <Text style={styles.scheduleSubtext}>{sub}</Text>}
    </View>
  </View>
);

const ScheduleCard = ({ consultation }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>Consultation Schedule</Text>
    </View>

    <View style={styles.scheduleContainer}>
      <ScheduleItem
        icon={<Calendar size={16} color="#1A4BAD" />}
        label="Date"
        value={formatDate(consultation.date)}
      />

      <ScheduleItem
        icon={<Clock size={16} color="#059669" />}
        label="Time"
        value={formatTime(consultation.time)}
      />

      <ScheduleItem
        icon={<MapPin size={16} color="#0A7ABE" />}
        label="Venue"
        value={consultation.venue || '—'}
        sub={`Room ${consultation.room_number || 'N/A'}`}
      />
    </View>
  </View>
);

export default ScheduleCard;
