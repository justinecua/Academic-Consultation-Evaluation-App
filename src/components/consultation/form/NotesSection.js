import Section from '../Section';
import FormTextArea from '../FormTextArea';

const NotesSection = ({ form, handleChange }) => {
  return (
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
  );
};

export default NotesSection;
