import { showMessage } from 'react-native-flash-message';

export const useLoginActions = ({ login, credentials, setLoading }) => {
  const validateForm = () => {
    if (!credentials.username.trim() || !credentials.password.trim()) {
      showMessage({
        message: 'Please enter both username and password',
        type: 'danger',
      });
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const result = await login(credentials.username, credentials.password);

      if (!result) {
        showMessage({ message: 'No response from server.', type: 'danger' });
        return;
      }

      if (!result.success) {
        showMessage({ message: result.message, type: 'danger' });
        return;
      }

      showMessage({ message: 'Login successful!', type: 'success' });
    } catch {
      showMessage({
        message: 'Something went wrong. Please try again.',
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin };
};
