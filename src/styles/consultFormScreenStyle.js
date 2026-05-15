import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: '#0D2460',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
    marginLeft: 16,
  },
  MainSection: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginTop: 20,
  },

  section: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#667caa',
    paddingBottom: 15,
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E2E8F2',
    fontFamily: 'Nunito-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '800',
    color: '#667caa',
    paddingBottom: 10,
    borderBottomColor: '#E2E8F2',
    fontFamily: 'Nunito-Bold',
    textTransform: 'uppercase',
  },

  labelDropdown: {
    fontSize: 12,
    fontWeight: 600,
    color: '#6782b3',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 10,
    fontSize: 13,
    color: '#6782b3',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
    paddingHorizontal: 1,
  },
  thirdInput: {
    width: '31%',
    paddingHorizontal: 1,
  },
  twoThirds: {
    width: '65%',
    paddingHorizontal: 1,
  },
  oneThird: {
    width: '31%',
    paddingHorizontal: 1,
  },
  submitButton: {
    backgroundColor: '#0D2460',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 4,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  dropdownContainer: {
    width: '80%',
    maxHeight: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  dropdownScroll: {
    maxHeight: 250,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
    fontSize: 12,
    color: '#1A202C',
  },
  dropdownItemText: {
    fontSize: 12,
    fontWeight: 600,
    color: '#6782b3',
  },
});
