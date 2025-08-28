import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import { styles } from '../../styles/consultFormScreenStyle';

const CollegeDropdown = ({ college, setCollege, show, setShow, colleges }) => (
  <>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>College</Text>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setShow(true)}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={[{ fontSize: 15, color: college ? '#1A202C' : '#A0AEC0' }]}
          >
            {college || 'Select college'}
          </Text>
        </View>
        <ChevronDown size={20} color="#A0AEC0" />
      </TouchableOpacity>
    </View>

    {/* Modal */}
    <Modal
      visible={show}
      transparent
      animationType="fade"
      onRequestClose={() => setShow(false)}
    >
      <TouchableWithoutFeedback onPress={() => setShow(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.dropdownContainer}>
            <ScrollView style={styles.dropdownScroll}>
              {colleges.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setCollege(item);
                    setShow(false);
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
  </>
);

export default CollegeDropdown;
