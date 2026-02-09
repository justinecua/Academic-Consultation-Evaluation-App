import { useContext } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../styles/consultFormScreenStyle';
import { useConsultationForm } from '../../hooks/useConsultationForm';
import FormHeader from '../../components/consultation/form/FormHeader';
import ConsultationDetailsSection from '../../components/consultation/form/ConsultationDetailsSection';
import StudentInfoSection from '../../components/consultation/form/StudentInfoSection';
import NotesSection from '../../components/consultation/form/NotesSection';
import SubmitButton from '../../components/consultation/form/SubmitButton';

const ConsultationFormScreen = ({ navigation }) => {
  const { accessToken } = useContext(AuthContext);
  const formHook = useConsultationForm(accessToken, navigation);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <FormHeader />
        <ConsultationDetailsSection {...formHook} />
        <StudentInfoSection {...formHook} />
        <NotesSection {...formHook} />
        <SubmitButton {...formHook} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConsultationFormScreen;
