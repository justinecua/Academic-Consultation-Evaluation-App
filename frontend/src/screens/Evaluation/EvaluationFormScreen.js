import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Burnt from 'burnt';
import { styles } from '../../styles/evalFormScreenStyle';

import FormField from '../../components/evaluation/FormField';
import QuestionSection from '../../components/evaluation/QuestionSection';
import CommentsBox from '../../components/evaluation/CommentsBox';
import LegendBox from '../../components/evaluation/LegendBox';
import { submitEvaluation, getQuestions } from '../../api/services/evaluation';
import { AuthContext } from '../../context/AuthContext';

const EvaluationFormScreen = ({ navigation }) => {
  const { accessToken } = useContext(AuthContext);
  const today = new Date();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [showObsDate, setShowObsDate] = useState(false);
  const [showObsTime, setShowObsTime] = useState(false);
  const [showConfDate, setShowConfDate] = useState(false);
  const [showConfTime, setShowConfTime] = useState(false);

  const [formData, setFormData] = useState({
    teacherName: '',
    date: today.toISOString().split('T')[0],
    time: today.toTimeString().split(' ')[0].slice(0, 5),
    college: '',
    roomNumber: '',
    subject: '',
    ratings: {},
    comments: '',
    dateOfConference: '',
    timeOfConference: '',
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions(accessToken);
        const formatted = data.map(q => ({
          id: q.id,
          question: q.text,
          category: q.category,
        }));
        setQuestions(formatted);
      } catch (err) {
        console.error('Failed to fetch questions:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleDateChange = (field, event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    if (field === 'date') setShowObsDate(false);
    if (field === 'dateOfConference') setShowConfDate(false);
    const formatted = currentDate.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, [field]: formatted }));
  };

  const handleTimeChange = (field, event, selectedTime) => {
    const currentTime = selectedTime || new Date();
    if (field === 'time') setShowObsTime(false);
    if (field === 'timeOfConference') setShowConfTime(false);
    const hh = currentTime.getHours().toString().padStart(2, '0');
    const mm = currentTime.getMinutes().toString().padStart(2, '0');
    setFormData(prev => ({ ...prev, [field]: `${hh}:${mm}` }));
  };

  const handleRatingChange = (questionId, rating) => {
    setFormData(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [questionId]: rating },
    }));
  };

  const getAverage = () => {
    const values = Object.values(formData.ratings).filter(v => v !== 'NA');
    if (values.length === 0) return 0;
    const numeric = values.map(v => Number(v));
    const sum = numeric.reduce((a, b) => a + b, 0);
    return (sum / numeric.length).toFixed(2);
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    const payload = {
      teacher_name: formData.teacherName,
      college: formData.college,
      subject: formData.subject,
      room_number: formData.roomNumber,
      date: formData.date,
      time_of_observation: formData.time,
      other_comments: formData.comments,
      average_rating: getAverage(),
      date_of_conference: formData.dateOfConference || null,
      time_of_conference: formData.timeOfConference || null,
      responses: Object.entries(formData.ratings).map(
        ([questionId, rating]) => ({
          question: parseInt(questionId),
          rating: rating === 'NA' ? 0 : rating,
          remarks: '',
        }),
      ),
    };

    try {
      const res = await submitEvaluation(payload, accessToken);

      Burnt.toast({
        title: 'Evaluation submitted successfully',
        preset: 'done',
      });

      console.log('Submitted:', res);

      const today = new Date();
      setFormData({
        teacherName: '',
        date: today.toISOString().split('T')[0],
        time: today.toTimeString().split(' ')[0].slice(0, 5),
        college: '',
        roomNumber: '',
        subject: '',
        ratings: {},
        comments: '',
        dateOfConference: '',
        timeOfConference: '',
      });
    } catch (err) {
      console.error('Error submitting:', err);
      Burnt.toast({
        title: 'Submission failed',
        preset: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          Loading questions...
        </Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.mainTitle}>
            Evaluation for Classroom Instruction Form
          </Text>
        </View>

        {/* Basic Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          <FormField
            label="Name of Teacher"
            value={formData.teacherName}
            onChangeText={text =>
              setFormData({ ...formData, teacherName: text })
            }
          />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <TouchableOpacity onPress={() => setShowObsDate(true)}>
                <FormField
                  label="Date"
                  value={formData.date}
                  editable={false}
                />
              </TouchableOpacity>
              {showObsDate && (
                <DateTimePicker
                  value={new Date(formData.date)}
                  mode="date"
                  display="default"
                  onChange={(e, d) => handleDateChange('date', e, d)}
                />
              )}
            </View>

            <View style={styles.halfInput}>
              <TouchableOpacity onPress={() => setShowObsTime(true)}>
                <FormField
                  label="Time of Observation"
                  value={formData.time}
                  editable={false}
                />
              </TouchableOpacity>
              {showObsTime && (
                <DateTimePicker
                  value={new Date()}
                  mode="time"
                  display="default"
                  onChange={(e, t) => handleTimeChange('time', e, t)}
                />
              )}
            </View>
          </View>

          <FormField
            label="College"
            value={formData.college}
            onChangeText={text => setFormData({ ...formData, college: text })}
          />
          <FormField
            label="Room Number"
            value={formData.roomNumber}
            onChangeText={text =>
              setFormData({ ...formData, roomNumber: text })
            }
          />
          <FormField
            label="Subject"
            value={formData.subject}
            onChangeText={text => setFormData({ ...formData, subject: text })}
          />
        </View>

        {/* Questions */}
        <View style={styles.section}>
          <QuestionSection
            title="CONTENT"
            questions={questions.filter(q => q.category === 'content')}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />
          <QuestionSection
            title="TEACHING PROCEDURES"
            questions={questions.filter(q => q.category === 'teaching')}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />
          <QuestionSection
            title="TEACHER-STUDENT INTERACTION"
            questions={questions.filter(q => q.category === 'interaction')}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />
        </View>

        {/* Conference Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conference Details</Text>
          <View style={styles.row}>
            <View style={styles.halfInput}>
              <TouchableOpacity onPress={() => setShowConfDate(true)}>
                <FormField
                  label="Date of Conference"
                  value={formData.dateOfConference}
                  editable={false}
                  placeholder="YYYY-MM-DD"
                />
              </TouchableOpacity>
              {showConfDate && (
                <DateTimePicker
                  value={
                    formData.dateOfConference
                      ? new Date(formData.dateOfConference)
                      : new Date()
                  }
                  mode="date"
                  display="default"
                  onChange={(e, d) =>
                    handleDateChange('dateOfConference', e, d)
                  }
                />
              )}
            </View>

            <View style={styles.halfInput}>
              <TouchableOpacity onPress={() => setShowConfTime(true)}>
                <FormField
                  label="Time of Conference"
                  value={formData.timeOfConference}
                  editable={false}
                  placeholder="HH:MM"
                />
              </TouchableOpacity>
              {showConfTime && (
                <DateTimePicker
                  value={new Date()}
                  mode="time"
                  display="default"
                  onChange={(e, t) =>
                    handleTimeChange('timeOfConference', e, t)
                  }
                />
              )}
            </View>
          </View>
        </View>

        {/* Average */}
        <View style={styles.RatingScaleInstruction}>
          <Text style={styles.RatingScaleInstructionText}>
            AVERAGE: {getAverage()}
          </Text>
        </View>

        {/* Comments */}
        <CommentsBox
          value={formData.comments}
          onChangeText={text => setFormData({ ...formData, comments: text })}
        />

        {/* Submit */}
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
            <Text style={styles.submitText}>SUBMIT EVALUATION</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EvaluationFormScreen;
