import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  User,
  LogOut,
  Mail,
  Phone,
  Building,
  ChevronRight,
} from 'lucide-react-native';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Sign Out', style: 'destructive', onPress: logout },
      ],
      { cancelable: true }
    );
  };

  const ProfileField = ({ icon: Icon, label, value }) => (
    <View style={styles.fieldContainer}>
      <View style={styles.fieldHeader}>
        <View style={styles.fieldLeft}>
          <Icon size={20} color="#64748B" />
          <Text style={styles.fieldLabel}>{label}</Text>
        </View>
        <ChevronRight size={20} color="#CBD5E1" />
      </View>

      {value ? (
        <Text style={styles.fieldValue}>{value}</Text>
      ) : (
        <Text style={styles.fieldEmpty}>Not provided</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <User size={32} color="#3B82F6" />
          </View>

          <Text style={styles.name}>
            {user?.name ||
              `${user?.first_name || ''} ${user?.last_name || ''}`.trim() ||
              'User'}
          </Text>

          <Text style={styles.role}>
            {user?.personnelinfo?.position || 'Staff'}
          </Text>
        </View>

        {/* Profile Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Information</Text>

          <ProfileField icon={User} label="Username" value={user?.username} />
          <ProfileField icon={Mail} label="Email" value={user?.email} />
          <ProfileField
            icon={Phone}
            label="Phone"
            value={user?.phone || user?.phone_number}
          />
          <ProfileField
            icon={Building}
            label="Department"
            value={user?.department}
          />

          {user?.employee_id && (
            <ProfileField
              icon={User}
              label="Employee ID"
              value={user.employee_id}
            />
          )}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Footer Logout Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.85}
        >
          <LogOut size={19} color="#EF4444" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#DBEAFE',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    paddingHorizontal: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  fieldContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  fieldHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  fieldLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
  },
  fieldValue: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '400',
  },
  fieldEmpty: {
    fontSize: 16,
    color: '#94A3B8',
    fontStyle: 'italic',
  },
  footer: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingBottom: 90,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FECACA',
    backgroundColor: '#FFFFFF',
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EF4444',
  },
  bottomSpacing: {
    height: 20,
  },
});
