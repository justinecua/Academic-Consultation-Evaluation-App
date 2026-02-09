import { View } from 'react-native';
import { styles } from '../../../styles/evalFormScreenStyle';
import QuestionSection from '../QuestionSection';

const QuestionSections = ({ form }) => {
  return (
    <View style={styles.section}>
      <QuestionSection
        title="CONTENT"
        questions={form.questions.filter(q => q.category === 'content')}
        ratings={form.formData.ratings}
        handleRatingChange={form.handleRatingChange}
      />

      <QuestionSection
        title="TEACHING PROCEDURES"
        questions={form.questions.filter(q => q.category === 'teaching')}
        ratings={form.formData.ratings}
        handleRatingChange={form.handleRatingChange}
      />

      <QuestionSection
        title="TEACHER-STUDENT INTERACTION"
        questions={form.questions.filter(q => q.category === 'interaction')}
        ratings={form.formData.ratings}
        handleRatingChange={form.handleRatingChange}
      />
    </View>
  );
};

export default QuestionSections;
