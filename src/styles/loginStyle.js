import { StyleSheet, Dimensions, Platform } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const Fonts = {
  BillionDreams: Platform.select({
    ios: "BillionDreams",   
    android: "BillionDreams_PERSONAL" 
  }),

  NunitoSemiBold: Platform.select({
    ios: "Nunito-SemiBold",
    android: "Nunito-SemiBold",
  }),

  NunitoRegular: Platform.select({
    ios: "Nunito-Regular",
    android: "Nunito-Regular",
  }),
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: verticalScale(30),
    paddingHorizontal: scale(20),
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: scale(400),
    alignSelf: 'center',
    width: '100%',
  },

  headerSection: {
    alignItems: 'center',
    marginBottom: verticalScale(40),
  },

  logoContainer: {
    width: scale(70),
    height: scale(70),
    marginBottom: verticalScale(12),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  logo: {
    width: '60%',
    height: '60%',
  },

  textContainer: {
    alignItems: 'center',
  },

  // TITLE (Uses BillionDreams)
  title: {
    fontSize: moderateScale(50),
    fontFamily: Fonts.BillionDreams,
    color: '#1E3A8A',
    marginBottom: verticalScale(6),
  },

  // SUBTITLE (Uses Nunito SemiBold)
  subtitle: {
    textAlign: 'center',
    color: '#1E3A8A',
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    maxWidth: scale(280),
    fontFamily: Fonts.NunitoSemiBold,
  },

  formSection: {
    marginBottom: verticalScale(20),
  },

  inputContainer: {
    marginBottom: verticalScale(10),
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(14),
    backgroundColor: '#FFFFFF',
    height: 60,
    elevation: 1,
    overflow: 'hidden',
  },

  inputFocused: {
    borderColor: '#1E3A8A',
    shadowColor: '#1E3A8A',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  // INPUT TEXT FIELD
  input: {
    flex: 1,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(8),
    fontSize: moderateScale(15),
    color: '#1E3A8A',
    fontFamily: Fonts.NunitoSemiBold,
  },

  visibilityToggle: {
    padding: scale(6),
    marginLeft: scale(4),
  },

  button: {
    backgroundColor: '#1E3A8A',
    paddingVertical: verticalScale(14),
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    elevation: 5,
  },

  buttonDisabled: {
    backgroundColor: '#27428bff',
    elevation: 0,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: moderateScale(15),
    fontFamily: Fonts.NunitoSemiBold,
  },

  footer: {
    paddingVertical: verticalScale(14),
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#fff',
  },

  footerText: {
    fontSize: moderateScale(11),
    color: '#6B7280',
    textAlign: 'center',
    fontFamily: Fonts.NunitoSemiBold,
  },
});
