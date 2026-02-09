import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../styles/consultationDetailScreenStyle';

const Section = ({ label, value }) => (
  <>
    <View style={styles.textSection}>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textValue}>{value}</Text>
    </View>
    <View style={styles.divider} />
  </>
);

const TextSectionCard = ({ consultation }) => (
  <>
    {/* Academic Assessment */}
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Academic Assessment</Text>
      </View>

      <View style={styles.textContent}>
        <Section
          label="Difficulties Identified"
          value={
            consultation.difficulties_identified || 'No difficulties identified'
          }
        />
        <Section
          label="Learning Assistance Provided"
          value={
            consultation.learning_assistance ||
            'No learning assistance provided'
          }
        />
      </View>
    </View>

    {/* Resolution */}
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Resolution & Remarks</Text>
      </View>

      <View style={styles.textContent}>
        <Section
          label="Resolution"
          value={consultation.resolution || 'No resolution provided'}
        />
        <Section
          label="Remarks"
          value={consultation.remarks || 'No remarks provided'}
        />
      </View>
    </View>
  </>
);

export default TextSectionCard;
