import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/loginStyle';

const LoginFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2026 St. Michael’s College of Iligan Inc. All rights reserved.
      </Text>
    </View>
  );
};

export default LoginFooter;
