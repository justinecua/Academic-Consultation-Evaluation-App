import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2D3748',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    marginTop: 8,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A5568',
    marginBottom: 8,
  },
  input: {
    height: 48,
    fontSize: 16,
    color: '#1A202C',
    paddingBottom: 8,
  },
  inputUnderline: {
    height: 2,
    backgroundColor: '#E2E8F0',
    marginTop: 4,
  },
  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#5E72E4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#5E72E4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 32,
    color: '#718096',
  },
  footerLink: {
    color: '#5E72E4',
    fontWeight: '600',
  },
});
