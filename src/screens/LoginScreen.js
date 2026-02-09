import React, { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles/loginStyle';
import LoginHeader from '../components/login/LoginHeader';
import UsernameInput from '../components/login/UsernameInput';
import PasswordInput from '../components/login/PasswordInput';
import LoginButton from '../components/login/LoginButton';
import LoginFooter from '../components/login/LoginFooter';
import { useLoginForm } from '../hooks/useLoginForm';
import { useLoginActions } from '../hooks/useLoginActions';

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const form = useLoginForm();
  const { handleLogin } = useLoginActions({
    login,
    credentials: form.credentials,
    setLoading: form.setLoading,
  });

  const isButtonDisabled = form.loading || !form.isFormValid;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        <LoginHeader />

        <UsernameInput
          value={form.credentials.username}
          onChange={v => form.handleInputChange('username', v)}
          focused={form.focusedField === 'username'}
          onFocus={() => form.setFocusedField('username')}
          onBlur={() => form.setFocusedField(null)}
        />

        <PasswordInput
          value={form.credentials.password}
          onChange={v => form.handleInputChange('password', v)}
          focused={form.focusedField === 'password'}
          onFocus={() => form.setFocusedField('password')}
          onBlur={() => form.setFocusedField(null)}
          showPassword={form.showPassword}
          togglePassword={() => form.setShowPassword(p => !p)}
          loading={form.loading}
        />

        <LoginButton
          onPress={handleLogin}
          disabled={isButtonDisabled}
          loading={form.loading}
        />
      </View>

      <LoginFooter />
    </ScrollView>
  );
};

export default LoginScreen;
