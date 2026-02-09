import { useState } from 'react';

export const useLoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field, value) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    credentials.username.trim() && credentials.password.trim();

  return {
    credentials,
    setCredentials,
    loading,
    setLoading,
    showPassword,
    setShowPassword,
    focusedField,
    setFocusedField,
    handleInputChange,
    isFormValid,
  };
};
