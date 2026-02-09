import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../styles/loginStyle';

const LoginHeader = () => {
  return (
    <View style={styles.headerSection}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Assessly</Text>
        <Text style={styles.subtitle}>
          Promoting academic growth through evaluation and consultation
        </Text>
      </View>
    </View>
  );
};

export default LoginHeader;
