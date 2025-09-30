import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from '../../styles/consultFormScreenStyle';

import FormField from '../../components/evaluation/FormField';
import FormTextArea from '../../components/consultation/FormTextArea';
import CollegeDropdown from '../../components/consultation/CollegeDropDown';
import Section from '../../components/consultation/Section';

const ConsultationFormScreen = ({ navigation }) => {
  const [college, setCollege] = useState('');
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);

  const colleges = [
    'College of Engineering',
    'College of Arts & Sciences',
    'College of Education',
    'College of Computer Studies',
    'College of Hospitality Management',
    'College of Nursing',
    'College of Criminology',
  ];

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Consultation Details */}
        <Section title="Consultation Details">
          <CollegeDropdown
            college={college}
            setCollege={setCollege}
            show={showCollegeDropdown}
            setShow={setShowCollegeDropdown}
            colleges={colleges}
          />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <FormField label="Date" value={currentDate} editable={false} />
            </View>
            <View style={styles.halfInput}>
              <FormField label="Time" value={currentTime} editable={false} />
            </View>
          </View>

          <FormField label="Venue" />
        </Section>

        {/* Student Info */}
        <Section title="Student Information">
          <FormField label="Name of Student" />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <FormField label="Course & Year Level" />
            </View>
            <View style={styles.halfInput}>
              <FormField label="Subject" />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <FormField label="Course Description" />
            </View>
            <View style={styles.halfInput}>
              <FormField label="Class Schedule" />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.thirdInput}>
              <FormField label="School Year" />
            </View>
            <View style={styles.thirdInput}>
              <FormField label="Semester" />
            </View>
            <View style={styles.thirdInput}>
              <FormField label="Term" />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <FormField label="Subject Grade" />
            </View>
            <View style={styles.halfInput}>
              <FormField label="Room #" />
            </View>
          </View>
        </Section>

        {/* Consultation Notes */}
        <Section title="Consultation Notes">
          <FormTextArea label="Difficulties Identified" />
            <FormTextArea label="Remarks" />
          <FormTextArea label="Learning Assistance Provided by the Teacher" />
          <FormTextArea label="Resolution Attained by Student & Teacher" />
        </Section>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit Consultation</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConsultationFormScreen;
