import React, { useState, useContext } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import * as Burnt from 'burnt';
import { styles } from '../../styles/consultFormScreenStyle';

import FormField from '../../components/evaluation/FormField';
import FormTextArea from '../../components/consultation/FormTextArea';
import CollegeDropdown from '../../components/consultation/CollegeDropDown';
import Section from '../../components/consultation/Section';

import { AuthContext } from '../../context/AuthContext';
import { submitConsultation } from '../../api/services/consultation';

const ConsultationFormScreen = ({ navigation }) => {
  const { accessToken } = useContext(AuthContext);

  const [form, setForm] = useState({
    college: '',
    venue: '',
    student_name: '',
    course_year: '',
    subject: '',
    course_description: '',
    class_schedule: '',
    room_number: '',
    school_year: '',
    semester: '',
    term: '',
    subject_grade: '',
    difficulties_identified: '',
    remarks: '',
    learning_assistance: '',
    resolution: '',
  });

  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const colleges = [
    'College of Engineering',
    'College of Arts & Sciences',
    'College of Education',
    'College of Computer Studies',
    'College of Nursing',
    'College of Criminology',
    'College of Hospitality and Tourism Management',
    'College of Business Administration and Accountancy',
  ];

  const currentDate = new Date().toISOString().split('T')[0];
  const currentTime = new Date().toTimeString().slice(0, 5);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    // Required fields
    const requiredFields = [
      'college',
      'venue',
      'student_name',
      'course_year',
      'subject',
      'course_description',
      'class_schedule',
      'school_year',
      'semester',
      'term',
    ];

    for (let field of requiredFields) {
      if (!form[field] || form[field].trim() === '') {
        Burnt.toast({
          title: `Please fill out ${field.replace('_', ' ')}`,
          preset: 'error',
        });
        return;
      }
    }

    setSubmitting(true);
    try {
      await submitConsultation(
        { ...form, date: currentDate, time: currentTime },
        accessToken,
      );

      Burnt.toast({
        title: 'Consultation submitted successfully',
        preset: 'done',
      });

      // reset form
      setForm({
        college: '',
        venue: '',
        student_name: '',
        course_year: '',
        subject: '',
        course_description: '',
        class_schedule: '',
        room_number: '',
        school_year: '',
        semester: '',
        term: '',
        subject_grade: '',
        difficulties_identified: '',
        remarks: '',
        learning_assistance: '',
        resolution: '',
      });

      navigation.goBack();
    } catch (err) {
      console.error(err);
      Burnt.toast({
        title: 'Submission failed',
        preset: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.MainSection}>
          <Text style={styles.mainTitle}>Academic Consultation Form</Text>
        </View>
        {/* Consultation Details */}
        <Section title="Consultation Details">
          <CollegeDropdown
            college={form.college}
            setCollege={val => handleChange('college', val)}
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

          <FormField
            label="Venue"
            value={form.venue}
            onChangeText={val => handleChange('venue', val)}
          />
        </Section>

        {/* Student Info */}
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

        {/* Consultation Notes */}
        <Section title="Consultation Notes">
          <FormTextArea
            label="Difficulties Identified"
            value={form.difficulties_identified}
            onChangeText={val => handleChange('difficulties_identified', val)}
          />
          <FormTextArea
            label="Remarks"
            value={form.remarks}
            onChangeText={val => handleChange('remarks', val)}
          />
          <FormTextArea
            label="Learning Assistance Provided by the Teacher"
            value={form.learning_assistance}
            onChangeText={val => handleChange('learning_assistance', val)}
          />
          <FormTextArea
            label="Resolution Attained by Student & Teacher"
            value={form.resolution}
            onChangeText={val => handleChange('resolution', val)}
          />
        </Section>

        {/* Submit Button */}
        <TouchableOpacity
          style={[
            styles.submitButton,
            submitting && { backgroundColor: '#A0AEC0' },
          ]}
          onPress={handleSubmit}
          disabled={submitting}
        >
          {submitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitText}>Submit Consultation</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConsultationFormScreen;
