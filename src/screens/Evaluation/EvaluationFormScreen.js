import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from '../../styles/evalFormScreenStyle';

import FormField from '../../components/evaluation/FormField';
import QuestionSection from '../../components/evaluation/QuestionSection';
import CommentsBox from '../../components/evaluation/CommentsBox';
import LegendBox from '../../components/evaluation/LegendBox';
import evaluationQuestions from '../../components/evaluation/evaluationQuestions';

const EvaluationFormScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    teacherName: '',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    college: '',
    roomNumber: '',
    subject: '',
    ratings: {},
    comments: '',
  });

  const handleRatingChange = (questionId, rating) => {
    setFormData(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [questionId]: rating },
    }));
  };

  const handleSubmit = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              <FormField label="Date" value={formData.date} editable={false} />
            </View>
            <View style={styles.halfInput}>
              <FormField
                label="Time of Observation"
                value={formData.time}
                editable={false}
              />
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

        {/* Rating Scale Legend */}
        <LegendBox />

        {/* Questions */}
        <View style={styles.section}>
          <QuestionSection
            title="CONTENT"
            questions={evaluationQuestions.filter(
              q => q.category === 'content',
            )}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />
          <QuestionSection
            title="TEACHING PROCEDURES"
            questions={evaluationQuestions.filter(
              q => q.category === 'procedures',
            )}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />
          <QuestionSection
            title="TEACHER-STUDENT INTERACTION"
            questions={evaluationQuestions.filter(
              q => q.category === 'interaction',
            )}
            ratings={formData.ratings}
            handleRatingChange={handleRatingChange}
          />
        </View>

        {/* Comments */}
        <CommentsBox
          value={formData.comments}
          onChangeText={text => setFormData({ ...formData, comments: text })}
        />

        {/* Submit */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>SUBMIT EVALUATION</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EvaluationFormScreen;
