import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../../../styles/evalFormScreenStyle';
import FormField from '../FormField';

const ConferenceSection = ({ form }) => {
  return (
    <View style={styles.section}>
      <View style={styles.row}>
        {/* DATE */}
        <View style={styles.halfInput}>
          <TouchableOpacity onPress={() => form.setShowConfDate(true)}>
            <FormField
              label="Date of Conference"
              value={form.formData.dateOfConference}
              editable={false}
              placeholder="YYYY-MM-DD"
            />
          </TouchableOpacity>

          {form.showConfDate && (
            <DateTimePicker
              value={
                form.formData.dateOfConference
                  ? new Date(form.formData.dateOfConference)
                  : new Date()
              }
              mode="date"
              display="default"
              onChange={(e, d) => {
                form.setShowConfDate(false);
                if (d)
                  form.setFormData({
                    ...form.formData,
                    dateOfConference: d.toISOString().split('T')[0],
                  });
              }}
            />
          )}
        </View>

        {/* TIME */}
        <View style={styles.halfInput}>
          <TouchableOpacity onPress={() => form.setShowConfTime(true)}>
            <FormField
              label="Time of Conference"
              value={form.formData.timeOfConference}
              editable={false}
              placeholder="HH:MM"
            />
          </TouchableOpacity>

          {form.showConfTime && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              display="default"
              onChange={(e, t) => {
                form.setShowConfTime(false);
                if (t) {
                  const hh = t.getHours().toString().padStart(2, '0');
                  const mm = t.getMinutes().toString().padStart(2, '0');
                  form.setFormData({
                    ...form.formData,
                    timeOfConference: `${hh}:${mm}`,
                  });
                }
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default ConferenceSection;
