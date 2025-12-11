import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import { showMessage } from 'react-native-flash-message';

import { styles } from '../../styles/evalFormScreenStyle';

import FormField from '../../components/evaluation/FormField';
import QuestionSection from '../../components/evaluation/QuestionSection';
import CommentsBox from '../../components/evaluation/CommentsBox';
import LegendBox from '../../components/evaluation/LegendBox';
import { submitEvaluation, getQuestions } from '../../api/services/evaluation';

import { AuthContext } from '../../context/AuthContext';
import CollegeDropdown from '../../components/consultation/CollegeDropDown';

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
  const [refreshing, setRefreshing] = useState(false);
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);

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

  // GET QUESTIONS
  const fetchQuestions = async () => {
    try {
      const data = await getQuestions(accessToken);

      const formatted = data.map((q) => ({
        id: q.id,
        question: q.text,
        category: q.category,
      }));

      setQuestions(formatted);
    } catch (err) {
      showMessage({
        message: 'Failed to refresh questions.',
        type: 'danger',
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchQuestions();
  };

  // DATE CHANGE HANDLER
  const handleDateChange = (field, event, selectedDate) => {
    const currentDate = selectedDate || new Date();

    if (field === 'date') setShowObsDate(false);
    if (field === 'dateOfConference') setShowConfDate(false);

    const formatted = currentDate.toISOString().split('T')[0];

    setFormData((prev) => ({ ...prev, [field]: formatted }));
  };

  // TIME CHANGE HANDLER
  const handleTimeChange = (field, event, selectedTime) => {
    const currentTime = selectedTime || new Date();

    if (field === 'time') setShowObsTime(false);
    if (field === 'timeOfConference') setShowConfTime(false);

    const hh = currentTime.getHours().toString().padStart(2, '0');
    const mm = currentTime.getMinutes().toString().padStart(2, '0');

    setFormData((prev) => ({ ...prev, [field]: `${hh}:${mm}` }));
  };

  // HANDLE RATING CHANGE
  const handleRatingChange = (questionId, rating) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [questionId]: rating },
    }));
  };

  // CALCULATE AVERAGE
  const getAverage = () => {
    const values = Object.values(formData.ratings).filter((v) => v !== 'NA');
    if (values.length === 0) return 0;

    const numeric = values.map((v) => Number(v));
    const sum = numeric.reduce((a, b) => a + b, 0);

    return (sum / numeric.length).toFixed(2);
  };

  // SUBMIT FORM
  const handleSubmit = async () => {
    if (
      !formData.teacherName.trim() ||
      !formData.college.trim() ||
      !formData.subject.trim() ||
      !formData.roomNumber.trim()
    ) {
      showMessage({
        message: 'Please fill out all required fields.',
        type: 'danger',
      });
      return;
    }

    if (Object.keys(formData.ratings).length === 0) {
      showMessage({
        message: 'Please provide at least one rating.',
        type: 'danger',
      });
      return;
    }

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
      responses: Object.entries(formData.ratings).map(([questionId, rating]) => ({
        question: parseInt(questionId),
        rating: rating === 'NA' ? 0 : rating,
        remarks: '',
      })),
    };

    try {
      await submitEvaluation(payload, accessToken);

      showMessage({
        message: 'Evaluation submitted successfully.',
        type: 'success',
      });

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

      navigation.goBack();
    } catch (err) {
      console.error('Submit Error:', err);
      showMessage({
        message: 'Submission failed.',
        type: 'danger',
      });
    } finally {
      setSubmitting(false);
    }
  };

  // LOADING SCREEN
  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={{ marginTop: 10, fontSize: 16 }}>Loading questions...</Text>
      </View>
    );
  }

  // MAIN UI
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.MainSection}>
          <Text style={styles.mainTitle}>Evaluation for Classroom Instruction Form</Text>
        </View>

        {/* BASIC INFO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Information</Text>

          <FormField
            label="Name of Teacher"
            value={formData.teacherName}
            onChangeText={(text) => setFormData({ ...formData, teacherName: text })}
          />

          <View style={styles.row}>
            {/* OBSERVATION DATE */}
            <View style={styles.halfInput}>
              <TouchableOpacity onPress={() => setShowObsDate(true)}>
                <FormField label="Date" value={formData.date} editable={false} />
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

            {/* OBSERVATION TIME */}
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

          {/* COLLEGE DROPDOWN */}
          <CollegeDropdown
            college={formData.college}
            setCollege={(val) => setFormData({ ...formData, college: val })}
            show={showCollegeDropdown}
            setShow={setShowCollegeDropdown}
            colleges={colleges}
          />

          <FormField
            label="Room Number"
            value={formData.roomNumber}
            onChangeText={(t) => setFormData({ ...formData, roomNumber: t })}
          />

          <FormField
            label="Subject"
            value={formData.subject}
            onChangeText={(t) => setFormData({ ...formData, subject: t })}
          />
        </View>

        {/* QUESTION SECTIONS */}
        <View style={styles.section}>
          <QuestionSection
            title="CONTENT"
            questions={questions.filter((q) => q.category === 'content')}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />

          <QuestionSection
            title="TEACHING PROCEDURES"
            questions={questions.filter((q) => q.category === 'teaching')}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />

          <QuestionSection
            title="TEACHER-STUDENT INTERACTION"
            questions={questions.filter((q) => q.category === 'interaction')}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />
        </View>

        {/* CONFERENCE DETAILS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conference Details</Text>

          <View style={styles.row}>
            {/* DATE OF CONFERENCE */}
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
                  onChange={(e, d) => handleDateChange('dateOfConference', e, d)}
                />
              )}
            </View>

            {/* TIME OF CONFERENCE */}
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

        {/* AVERAGE DISPLAY */}
        <View style={styles.RatingScaleInstruction}>
          <Text style={styles.RatingScaleInstructionText}>
            AVERAGE: {getAverage()}
          </Text>
        </View>

        {/* COMMENTS */}
        <CommentsBox
          value={formData.comments}
          onChangeText={(text) => setFormData({ ...formData, comments: text })}
        />

        {/* SUBMIT BUTTON */}
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

        <View style={{ height: 30 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EvaluationFormScreen;
