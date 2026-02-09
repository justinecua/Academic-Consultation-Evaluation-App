import React from 'react';
import { View } from 'react-native';

import Section from '../Section';
import FormField from '../../evaluation/FormField';
import { styles } from '../../../styles/consultFormScreenStyle';

const StudentInfoSection = ({ form, handleChange }) => {
  return (
    <Section title="Student Information">
      <FormField
        label="Name of Student"
        value={form.student_name}
        onChangeText={val => handleChange('student_name', val)}
      />

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <FormField
            label="Course & Year Level"
            value={form.course_year}
            onChangeText={val => handleChange('course_year', val)}
          />
        </View>

        <View style={styles.halfInput}>
          <FormField
            label="Subject"
            value={form.subject}
            onChangeText={val => handleChange('subject', val)}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <FormField
            label="Course Description"
            value={form.course_description}
            onChangeText={val => handleChange('course_description', val)}
          />
        </View>

        <View style={styles.halfInput}>
          <FormField
            label="Class Schedule"
            value={form.class_schedule}
            onChangeText={val => handleChange('class_schedule', val)}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.thirdInput}>
          <FormField
            label="School Year"
            value={form.school_year}
            onChangeText={val => handleChange('school_year', val)}
          />
        </View>

        <View style={styles.thirdInput}>
          <FormField
            label="Semester"
            value={form.semester}
            onChangeText={val => handleChange('semester', val)}
          />
        </View>

        <View style={styles.thirdInput}>
          <FormField
            label="Term"
            value={form.term}
            onChangeText={val => handleChange('term', val)}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <FormField
            label="Subject Grade"
            value={form.subject_grade}
            onChangeText={val => handleChange('subject_grade', val)}
          />
        </View>

        <View style={styles.halfInput}>
          <FormField
            label="Room #"
            value={form.room_number}
            onChangeText={val => handleChange('room_number', val)}
          />
        </View>
      </View>
    </Section>
  );
};

export default StudentInfoSection;
