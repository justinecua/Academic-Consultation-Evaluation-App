import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

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

  const evaluationQuestions = [
    {
      id: 1,
      question: 'Present the lesson as scheduled in the syllabus and Unit Plan',
      category: 'content',
    },
    {
      id: 2,
      question:
        'Organizes content logically and clearly to meet the Goals/Objectives of the lesson',
      category: 'content',
    },
    { id: 3, question: 'Mastery of the subject matter', category: 'content' },
    {
      id: 4,
      question:
        "Activates student's prior knowledge, life experiences, and interests relevant to the lesson",
      category: 'content',
    },
    {
      id: 5,
      question: 'Connects lesson content to real life situations/contexts',
      category: 'content',
    },
    {
      id: 6,
      question: 'Integration of lesson across disciplines',
      category: 'content',
    },
    {
      id: 7,
      question: 'Integration of Ignacian core and related values',
      category: 'content',
    },
    {
      id: 8,
      question: 'Connects lesson content to relevant Scriptural text',
      category: 'content',
    },

    // TEACHING PROCEDURES
    {
      id: 9,
      question: 'Delivers a well-planned and organized lesson',
      category: 'procedures',
    },
    {
      id: 10,
      question: 'Utilizes methods and techniques appropriate for the lesson',
      category: 'procedures',
    },
    {
      id: 11,
      question:
        'Employs appropriate instructional technologies/audio visual tools',
      category: 'procedures',
    },
    {
      id: 12,
      question:
        'Engages students in problem solving and critical thinking activities',
      category: 'procedures',
    },
    {
      id: 13,
      question: 'Employs differentiated instructions',
      category: 'procedures',
    },
    {
      id: 14,
      question:
        'Facilitates learning experiences promoting self-directed thinking',
      category: 'procedures',
    },
    {
      id: 15,
      question: 'Provides appropriate readings or handouts',
      category: 'procedures',
    },
    {
      id: 16,
      question: "Assesses student's transfer of learning",
      category: 'procedures',
    },

    // TEACHER-STUDENT INTERACTION
    {
      id: 17,
      question: 'Communicates clearly and fluently',
      category: 'interaction',
    },
    {
      id: 18,
      question: 'Demonstrates enthusiasm throughout the period',
      category: 'interaction',
    },
    {
      id: 19,
      question: "Responds appropriately to students' questions",
      category: 'interaction',
    },
    {
      id: 20,
      question: 'Varies activities to keep interests of students',
      category: 'interaction',
    },
    {
      id: 21,
      question: 'Encourages students to respectfully ask questions',
      category: 'interaction',
    },
    {
      id: 22,
      question: "Re-enforces students' explanations and checks misconceptions",
      category: 'interaction',
    },
  ];

  const handleRatingChange = (questionId, rating) => {
    setFormData({
      ...formData,
      ratings: {
        ...formData.ratings,
        [questionId]: rating,
      },
    });
  };

  const handleSubmit = () => {
    navigation.goBack();
  };

  const RatingButton = ({ questionId, value }) => (
    <TouchableOpacity
      style={[
        styles.ratingButton,
        formData.ratings[questionId] === value && styles.selectedRating,
      ]}
      onPress={() => handleRatingChange(questionId, value)}
    >
      <Text
        style={[
          styles.ratingText,
          formData.ratings[questionId] === value && styles.selectedRatingText,
        ]}
      >
        {value === 'NA' ? 'NA' : value}
      </Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Basic Information */}
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
        <View style={styles.legendContainer}>
          <Text style={styles.legendText}>5 = Excellent</Text>
          <Text style={styles.legendText}>4 = Very Good</Text>
          <Text style={styles.legendText}>3 = Good</Text>
          <Text style={styles.legendText}>2 = Fair</Text>
          <Text style={styles.legendText}>1 = Poor</Text>
          <Text style={styles.legendText}>NA = Not Applicable</Text>
        </View>

        {/* Evaluation Questions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CONTENT</Text>
          {evaluationQuestions
            .filter(q => q.category === 'content')
            .map(item => (
              <View key={item.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>
                  {item.id}. {item.question}
                </Text>
                <View style={styles.ratingContainer}>
                  {[5, 4, 3, 2, 1, 'NA'].map(value => (
                    <RatingButton
                      key={value}
                      questionId={item.id}
                      value={value}
                    />
                  ))}
                </View>
              </View>
            ))}

          <Text style={styles.sectionTitle}>TEACHING PROCEDURES</Text>
          {evaluationQuestions
            .filter(q => q.category === 'procedures')
            .map(item => (
              <View key={item.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>
                  {item.id}. {item.question}
                </Text>
                <View style={styles.ratingContainer}>
                  {[5, 4, 3, 2, 1, 'NA'].map(value => (
                    <RatingButton
                      key={value}
                      questionId={item.id}
                      value={value}
                    />
                  ))}
                </View>
              </View>
            ))}

          <Text style={styles.sectionTitle}>TEACHER-STUDENT INTERACTION</Text>
          {evaluationQuestions
            .filter(q => q.category === 'interaction')
            .map(item => (
              <View key={item.id} style={styles.questionContainer}>
                <Text style={styles.questionText}>
                  {item.id}. {item.question}
                </Text>
                <View style={styles.ratingContainer}>
                  {[5, 4, 3, 2, 1, 'NA'].map(value => (
                    <RatingButton
                      key={value}
                      questionId={item.id}
                      value={value}
                    />
                  ))}
                </View>
              </View>
            ))}
        </View>

        {/* Comments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>OTHER COMMENTS</Text>
          <TextInput
            style={styles.commentInput}
            multiline
            numberOfLines={4}
            placeholder="Enter your comments here..."
            value={formData.comments}
            onChangeText={text => setFormData({ ...formData, comments: text })}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>SUBMIT EVALUATION</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const FormField = ({ label, value, onChangeText, editable = true }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      editable={editable}
      placeholder={`Enter ${label.toLowerCase()}`}
      placeholderTextColor="#A0AEC0"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
    marginLeft: 16,
  },
  section: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A5568',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#1A202C',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  halfInput: {
    width: '48%',
    paddingHorizontal: 4,
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
  },
  legendText: {
    fontSize: 12,
    color: '#4A5568',
    width: '30%',
    marginBottom: 4,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 8,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingButton: {
    width: 40,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#4A5568',
    fontWeight: '500',
  },
  selectedRating: {
    backgroundColor: '#5E72E4',
  },
  selectedRatingText: {
    color: '#FFFFFF',
  },
  commentInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#1A202C',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#5E72E4',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EvaluationFormScreen;
