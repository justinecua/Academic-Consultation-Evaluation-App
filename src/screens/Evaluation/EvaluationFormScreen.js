import React, { useContext } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Text,
  RefreshControl,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../styles/evalFormScreenStyle';
import { useEvaluationForm } from '../../hooks/useEvaluationForm';
import FormHeader from '../../components/evaluation/form/FormHeader';
import BasicInfoSection from '../../components/evaluation/form/BasicInfoSection';
import QuestionSections from '../../components/evaluation/form/QuestionSections';
import ConferenceSection from '../../components/evaluation/form/ConferenceSection';
import AverageDisplay from '../../components/evaluation/form/AverageDisplay';
import SubmitEvaluationButton from '../../components/evaluation/form/SubmitEvaluationButton';

const EvaluationFormScreen = ({ navigation }) => {
  const { accessToken } = useContext(AuthContext);
  const form = useEvaluationForm(accessToken, navigation);

  if (form.loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={{ marginTop: 10 }}>Loading questions...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl
            refreshing={form.refreshing}
            onRefresh={form.refresh}
          />
        }
      >
        <FormHeader />

        <BasicInfoSection form={form} />
        <View style={styles.instructionCard}>
          <Text style={styles.instructionTitle}>
            Rate the teacher on each item following the given rating scale.
          </Text>

          <Text style={styles.instructionScale}>
            5 - Excellent 4 - Very Good 3 - Good 2 - Fair 1 - Poor NA = Not
            Applicable
          </Text>
        </View>

        <QuestionSections form={form} />
        <ConferenceSection form={form} />
        <AverageDisplay average={form.getAverage()} />
        <SubmitEvaluationButton
          submitting={form.submitting}
          onPress={form.handleSubmit}
        />

        <View style={{ height: 30 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EvaluationFormScreen;
