import { useState } from 'react';
import { submitConsultation } from '../api/services/consultation';
import { showMessage } from 'react-native-flash-message';

export const useConsultationForm = (accessToken, navigation) => {
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

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const currentDate = new Date().toISOString().split('T')[0];
  const currentTime = new Date().toTimeString().slice(0, 5);

  const validate = () => {
    const required = [
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

    for (let f of required) {
      if (!form[f]?.trim()) {
        showMessage({
          message: `Please fill out ${f.replace('_', ' ')}`,
          type: 'danger',
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setSubmitting(true);

    try {
      await submitConsultation(
        { ...form, date: currentDate, time: currentTime },
        accessToken,
      );

      showMessage({
        message: 'Consultation submitted successfully',
        type: 'success',
      });

      navigation.goBack();
    } catch {
      showMessage({ message: 'Submission failed', type: 'danger' });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    form,
    handleChange,
    showCollegeDropdown,
    setShowCollegeDropdown,
    submitting,
    handleSubmit,
    currentDate,
    currentTime,
  };
};
