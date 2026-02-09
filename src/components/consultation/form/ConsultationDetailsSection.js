import { View } from 'react-native';
import Section from '../Section';
import FormField from '../../evaluation/FormField';
import CollegeDropdown from '../CollegeDropDown';
import { styles } from '../../../styles/consultFormScreenStyle';

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

const ConsultationDetailsSection = ({
  form,
  handleChange,
  showCollegeDropdown,
  setShowCollegeDropdown,
  currentDate,
  currentTime,
}) => {
  return (
    <Section title="Consultation Details">
      <CollegeDropdown
        college={form.college}
        setCollege={val => handleChange('college', val)}
        show={showCollegeDropdown}
        setShow={setShowCollegeDropdown}
        colleges={colleges}
      />

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <FormField label="Date" value={currentDate} editable={false} />
        </View>

        <View style={styles.halfInput}>
          <FormField label="Time" value={currentTime} editable={false} />
        </View>
      </View>

      <FormField
        label="Venue"
        value={form.venue}
        onChangeText={val => handleChange('venue', val)}
      />
    </Section>
  );
};

export default ConsultationDetailsSection;
