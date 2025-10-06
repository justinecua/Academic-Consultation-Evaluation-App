import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from 'react-native-responsive-fontsize';

const IntroScreen2 = ({ navigation }) => {
  const handleGetStarted = async () => {
    await AsyncStorage.setItem('hasSeenIntro', 'true');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consult. Evaluate. Improve.</Text>
      <Text style={styles.subtitle}>
        Assessly helps bridge communication between students and teachers
        through consultation sessions and performance evaluations.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,
  },
  image: {
    width: '90%',
    height: '45%',
    marginBottom: 20,
  },
  title: {
    fontSize: RFValue(22),
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: RFValue(14),
    color: '#475569',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: RFValue(16),
    fontWeight: '600',
  },
});

export default IntroScreen2;
