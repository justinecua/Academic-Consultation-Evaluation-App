import React from 'react';
import { View, TouchableOpacity, Platform, Modal, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../../../styles/evalFormScreenStyle';
import FormField from '../FormField';

const ConferenceSection = ({ form }) => {
  const getTimeDateObject = () => {
    if (form.formData.timeOfConference) {
      const [hh, mm] = form.formData.timeOfConference.split(':');
      const d = new Date();
      d.setHours(Number(hh));
      d.setMinutes(Number(mm));
      return d;
    }
    return new Date();
  };

  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <View style={styles.halfInput}>
          <TouchableOpacity onPress={() => form.setShowConfDate(true)}>
            <FormField
              label="Date of Conference"
              value={form.formData.dateOfConference}
              editable={false}
              placeholder="YYYY-MM-DD"
            />
          </TouchableOpacity>

          {form.showConfDate &&
            (Platform.OS === 'ios' ? (
              <Modal transparent animationType="slide">
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                  }}
                >
                  <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
                    <DateTimePicker
                      value={
                        form.formData.dateOfConference
                          ? new Date(form.formData.dateOfConference)
                          : new Date()
                      }
                      mode="date"
                      display="spinner"
                      onChange={(event, selectedDate) => {
                        if (selectedDate) {
                          form.setFormData({
                            ...form.formData,
                            dateOfConference: selectedDate
                              .toISOString()
                              .split('T')[0],
                          });
                        }
                      }}
                    />

                    <TouchableOpacity
                      style={{ padding: 16, alignItems: 'center' }}
                      onPress={() => form.setShowConfDate(false)}
                    >
                      <Text style={{ fontWeight: '600' }}>Done</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            ) : (
              <DateTimePicker
                value={
                  form.formData.dateOfConference
                    ? new Date(form.formData.dateOfConference)
                    : new Date()
                }
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  form.setShowConfDate(false);
                  if (selectedDate) {
                    form.setFormData({
                      ...form.formData,
                      dateOfConference: selectedDate
                        .toISOString()
                        .split('T')[0],
                    });
                  }
                }}
              />
            ))}
        </View>

        <View style={styles.halfInput}>
          <TouchableOpacity onPress={() => form.setShowConfTime(true)}>
            <FormField
              label="Time of Conference"
              value={form.formData.timeOfConference}
              editable={false}
              placeholder="HH:MM"
            />
          </TouchableOpacity>

          {form.showConfTime &&
            (Platform.OS === 'ios' ? (
              <Modal transparent animationType="slide">
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                  }}
                >
                  <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
                    <DateTimePicker
                      value={getTimeDateObject()}
                      mode="time"
                      display="spinner"
                      onChange={(event, selectedTime) => {
                        if (selectedTime) {
                          const hh = selectedTime
                            .getHours()
                            .toString()
                            .padStart(2, '0');
                          const mm = selectedTime
                            .getMinutes()
                            .toString()
                            .padStart(2, '0');

                          form.setFormData({
                            ...form.formData,
                            timeOfConference: `${hh}:${mm}`,
                          });
                        }
                      }}
                    />

                    <TouchableOpacity
                      style={{ padding: 16, alignItems: 'center' }}
                      onPress={() => form.setShowConfTime(false)}
                    >
                      <Text style={{ fontWeight: '600' }}>Done</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            ) : (
              <DateTimePicker
                value={getTimeDateObject()}
                mode="time"
                display="default"
                onChange={(event, selectedTime) => {
                  form.setShowConfTime(false);
                  if (selectedTime) {
                    const hh = selectedTime
                      .getHours()
                      .toString()
                      .padStart(2, '0');
                    const mm = selectedTime
                      .getMinutes()
                      .toString()
                      .padStart(2, '0');

                    form.setFormData({
                      ...form.formData,
                      timeOfConference: `${hh}:${mm}`,
                    });
                  }
                }}
              />
            ))}
        </View>
      </View>
    </View>
  );
};

export default ConferenceSection;
