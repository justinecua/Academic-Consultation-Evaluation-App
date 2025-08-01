import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { ChevronLeft, ChevronDown } from 'lucide-react-native';

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
        {/* Form Sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Consultation Details</Text>

          {/* College Dropdown */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>College</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setShowCollegeDropdown(true)}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    { fontSize: 15, color: college ? '#1A202C' : '#A0AEC0' },
                  ]}
                >
                  {college || 'Select college'}
                </Text>
              </View>
              <ChevronDown size={20} color="#A0AEC0" />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Date</Text>
                <TextInput
                  style={styles.input}
                  value={currentDate}
                  editable={false}
                />
              </View>
            </View>
            <View style={styles.halfInput}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  value={currentTime}
                  editable={false}
                />
              </View>
            </View>
          </View>

          <FormField label="Venue" />
        </View>

        {/* Rest of your form sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Student Information</Text>

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
            <View>
              <FormField label="Room #" />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Consultation Notes</Text>
          <FormTextArea label="Difficulties Identified Remarks" height={100} />
          <FormTextArea
            label="Learning Assistance Provided by the Teacher"
            height={100}
          />
          <FormTextArea
            label="Resolution Attained by Student & Teacher"
            height={100}
          />
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit Consultation</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* College Dropdown Modal */}
      <Modal
        visible={showCollegeDropdown}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCollegeDropdown(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowCollegeDropdown(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.dropdownContainer}>
              <ScrollView style={styles.dropdownScroll}>
                {colleges.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setCollege(item);
                      setShowCollegeDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const FormField = ({ label }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} placeholderTextColor="#A0AEC0" />
  </View>
);

const FormTextArea = ({ label, height = 80 }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, { height }]}
      placeholderTextColor="#A0AEC0"
      multiline
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
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
    marginLeft: 16,
  },
  section: {
    marginBottom: 32,
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
  // Add this to your existing styles
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    color: '#1A202C',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
    paddingHorizontal: 1,
  },
  thirdInput: {
    width: '31%',
    paddingHorizontal: 1,
  },
  twoThirds: {
    width: '65%',
    paddingHorizontal: 1,
  },
  oneThird: {
    width: '31%',
    paddingHorizontal: 1,
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
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  dropdownContainer: {
    width: '80%',
    maxHeight: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  dropdownScroll: {
    maxHeight: 250,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
  },
  dropdownItemText: {
    fontSize: 15,
    color: '#2D3748',
  },
});

export default ConsultationFormScreen;
