import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Animated,
} from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  User,
  LogOut,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Shield,
  Info,
  Code2,
  Tag,
  LogOutIcon,
} from 'lucide-react-native';
import { styles } from '../styles/profileScreenStyle';
import ScreenContainer from './ScreenContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDeveloper, setShowDeveloper] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Sign Out', style: 'destructive', onPress: logout },
      ],
      { cancelable: true },
    );
  };

  const getInitials = name => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const ProfileField = ({ icon: Icon, label, value }) => (
    <View style={styles.fieldContainer}>
      <View style={styles.fieldHeader}>
        <View style={styles.fieldLeft}>
          <View style={styles.fieldIconWrap}>
            <Icon size={15} color="#3B6FD4" />
          </View>
          <Text style={styles.fieldLabel}>{label}</Text>
        </View>
        <ChevronRight size={14} color="#C8D6EE" />
      </View>
      {value ? (
        <Text style={styles.fieldValue}>{value}</Text>
      ) : (
        <Text style={styles.fieldEmpty}>Not provided</Text>
      )}
    </View>
  );

  const AccordionItem = ({ icon: Icon, title, content, isOpen, onToggle }) => (
    <View style={styles.accordionItem}>
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        <View style={styles.accordionLeft}>
          <View style={styles.accordionIconWrap}>
            <Icon size={15} color="#3B6FD4" />
          </View>
          <Text style={styles.accordionTitle}>{title}</Text>
        </View>
        {isOpen ? (
          <ChevronUp size={15} color="#8AAAD6" />
        ) : (
          <ChevronDown size={15} color="#8AAAD6" />
        )}
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.accordionBody}>
          <Text style={styles.accordionText}>{content}</Text>
        </View>
      )}
    </View>
  );

  const privacyPolicyContent = `This application is committed to protecting and respecting your privacy. We collect personal information such as your name, username, email, and contact details solely for authentication and to provide a personalized experience within the app.

All data collected is used only to enable app functionalities such as profile management, consultation tracking, and evaluation submissions. We do not share your personal information with third parties, except when required by law or with explicit consent.

Data storage and processing are handled securely using industry-standard encryption and security measures. Access to personal information is restricted to authorized personnel only. We may use anonymized data for app improvement, analytics, and research purposes, but this data will never identify individual users.

By using this app, you agree to the collection, use, and storage of your personal information as described. You have the right to access, update, or request deletion of your personal information at any time by contacting the app administrator.`;

  const aboutContent = `Assessly - St. Michael's College

Assessly is an academic management app designed exclusively for students, faculty, and staff of St. Michael's College. The app helps users manage their profiles, access consultation forms, and evaluate classroom instructions.

This application is intended solely for the St. Michael's College community and its authorized users. Unauthorized use outside of this institution is strictly prohibited.`;

  const developerContent = `\nDeveloped by Justine Cua\n`;

  return (
    <ScreenContainer style={styles.safe}>
      <SafeAreaView style={styles.safeInner}>
        <View style={styles.container}>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Profile Section */}
            <View style={styles.sectionGroup}>
              <Text style={styles.groupLabel}>Account</Text>
              <View style={styles.card}>
                <ProfileField
                  icon={User}
                  label="Username"
                  value={user?.username}
                />
              </View>
            </View>

            {/* App Info Section */}
            <View style={styles.sectionGroup}>
              <Text style={styles.groupLabel}>App Information</Text>
              <View style={styles.card}>
                {/* Version Row */}
                <View style={styles.fieldContainer}>
                  <View style={styles.fieldHeader}>
                    <View style={styles.fieldLeft}>
                      <View style={styles.fieldIconWrap}>
                        <Tag size={15} color="#3B6FD4" />
                      </View>
                      <Text style={styles.fieldLabel}>Version</Text>
                    </View>
                  </View>
                  <View style={styles.versionBadge}>
                    <Text style={styles.versionBadgeText}>v1.0.0</Text>
                  </View>
                </View>
              </View>

              {/* Accordion Card */}
              <View style={styles.card}>
                <AccordionItem
                  icon={Shield}
                  title="Privacy Policy"
                  content={privacyPolicyContent}
                  isOpen={showPrivacyPolicy}
                  onToggle={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
                />
                <View style={styles.accordionDivider} />
                <AccordionItem
                  icon={Info}
                  title="About"
                  content={aboutContent}
                  isOpen={showAbout}
                  onToggle={() => setShowAbout(!showAbout)}
                />
                <View style={styles.accordionDivider} />
                <AccordionItem
                  icon={Code2}
                  title="Developer"
                  content={developerContent}
                  isOpen={showDeveloper}
                  onToggle={() => setShowDeveloper(!showDeveloper)}
                />
              </View>
            </View>

            <View style={styles.card2}>
              <TouchableOpacity
                style={styles.fieldContainer}
                onPress={handleLogout}
                activeOpacity={0.75}
              >
                <View style={styles.fieldHeader}>
                  <View style={styles.fieldIconWrap}>
                    <LogOutIcon size={15} color="#3B6FD4" />
                  </View>

                  <Text style={styles.fieldLabel}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default ProfileScreen;
