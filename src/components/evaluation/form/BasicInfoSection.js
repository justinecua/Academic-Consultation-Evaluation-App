import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../../../styles/evalFormScreenStyle';
import FormField from '../../evaluation/FormField';
import CollegeDropdown from '../../consultation/CollegeDropDown';

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

const BasicInfoSection = ({ form }) => {
  return (
    <View style={styles.section}>
      <FormField
        label="Name of Teacher"
        value={form.formData.teacherName}
        onChangeText={text =>
          form.setFormData({ ...form.formData, teacherName: text })
        }
      />

      <View style={styles.row}>
        {/* DATE */}
        <View style={styles.halfInput}>
          <TouchableOpacity onPress={() => form.setShowObsDate(true)}>
            <FormField
              label="Date"
              value={form.formData.date}
              editable={false}
            />
          </TouchableOpacity>

          {form.showObsDate && (
            <DateTimePicker
              value={new Date(form.formData.date)}
              mode="date"
              display="default"
              onChange={(e, d) => {
                form.setShowObsDate(false);
                if (d)
                  form.setFormData({
                    ...form.formData,
                    date: d.toISOString().split('T')[0],
                  });
              }}
            />
          )}
        </View>

        {/* TIME */}
        <View style={styles.halfInput}>
          <TouchableOpacity onPress={() => form.setShowObsTime(true)}>
            <FormField
              label="Time of Observation"
              value={form.formData.time}
              editable={false}
            />
          </TouchableOpacity>

          {form.showObsTime && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              display="default"
              onChange={(e, t) => {
                form.setShowObsTime(false);
                if (t) {
                  const hh = t.getHours().toString().padStart(2, '0');
                  const mm = t.getMinutes().toString().padStart(2, '0');
                  form.setFormData({ ...form.formData, time: `${hh}:${mm}` });
                }
              }}
            />
          )}
        </View>
      </View>

      <CollegeDropdown
        college={form.formData.college}
        setCollege={val => form.setFormData({ ...form.formData, college: val })}
        show={form.showCollegeDropdown}
        setShow={form.setShowCollegeDropdown}
        colleges={colleges}
      />

      <FormField
        label="Room Number"
        value={form.formData.roomNumber}
        onChangeText={t =>
          form.setFormData({ ...form.formData, roomNumber: t })
        }
      />

      <FormField
        label="Subject"
        value={form.formData.subject}
        onChangeText={t => form.setFormData({ ...form.formData, subject: t })}
      />
    </View>
  );
};

export default BasicInfoSection;
