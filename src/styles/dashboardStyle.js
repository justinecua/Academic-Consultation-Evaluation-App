import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingBottom: verticalScale(40),
  },
  contentContainerTablet: {
    paddingBottom: verticalScale(60),
  },

  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(20),
    backgroundColor: '#F8FAFC',
  },
  headerTablet: {
    paddingHorizontal: scale(40),
    paddingVertical: verticalScale(30),
  },
  headerSmall: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
  },
  headerContent: {
    flex: 1,
  },
  greeting: {
    fontSize: moderateScale(14, 0.4),
    color: '#718096',
    fontWeight: '500',
    marginBottom: verticalScale(4),
    fontFamily: 'Nunito-SemiBold',
  },
  greetingTablet: {
    fontSize: moderateScale(16, 0.4),
    marginBottom: verticalScale(6),
  },
  greetingSmall: {
    fontSize: moderateScale(12, 0.4),
    marginBottom: verticalScale(2),
    fontFamily: 'Nunito-SemiBold',
  },
  welcome: {
    fontSize: moderateScale(20, 0.4),
    fontWeight: '700',
    fontFamily: 'Nunito-SemiBold',
    color: '#2D3748',
    marginBottom: verticalScale(6),
  },
  welcomeTablet: {
    fontSize: moderateScale(24, 0.4),
    fontFamily: 'Nunito-SemiBold',
  },
  welcomeSmall: {
    fontSize: moderateScale(16, 0.4),
    marginBottom: verticalScale(4),
    fontFamily: 'Nunito-SemiBold',
  },
  avatar: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    backgroundColor: '#EBF5FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(12),
  },
  avatarTablet: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
  },
  avatarSmall: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },

  // Stats Container
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(10),
    backgroundColor: '#F8FAFC',
  },
  statsContainerTablet: {
    paddingHorizontal: scale(40),
    paddingBottom: verticalScale(30),
  },
  statCard: {
    flexBasis: '48%',
    marginBottom: verticalScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: scale(16),
    borderRadius: moderateScale(12),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    minHeight: verticalScale(30),
  },
  statCardTablet: {
    flexBasis: '48%',
    padding: scale(20),
    marginBottom: verticalScale(16),
    minHeight: verticalScale(100),
  },
  statCardSmall: {
    flexBasis: '48%',
    padding: scale(12),
    minHeight: verticalScale(70),
  },

  statCardPixel: {
    flexBasis: '100%',
    marginBottom: verticalScale(8),
  },

  statIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(7),
    minWidth: scale(40),
  },
  statIconTablet: {
    width: scale(48),
    height: scale(48),
    minWidth: scale(48),
  },
  statIconSmall: {
    width: scale(36),
    height: scale(36),
    minWidth: scale(36),
    marginRight: scale(8),
  },

  statNumber: {
    fontSize: moderateScale(16, 0.4), // smaller than before
    fontWeight: '700',
    color: '#2D3748',
    fontFamily: 'Nunito-Bold',
  },

  statLabel: {
    fontSize: moderateScale(11, 0.4), // reduced for better fit
    color: '#718096',
    marginTop: verticalScale(2),
    fontFamily: 'Nunito-Bold',
  },

  statText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: scale(4),
    fontFamily: 'Nunito-Bold',
  },

  statNumberSmall: {
    fontSize: moderateScale(14, 0.4),
    fontFamily: 'Nunito-Bold',
  },
  statLabelSmall: {
    fontSize: moderateScale(10, 0.4),
    fontFamily: 'Nunito-Bold',
  },

  // Section Styles
  section: {
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(24),
  },
  sectionTablet: {
    paddingHorizontal: scale(40),
    paddingVertical: verticalScale(32),
  },
  sectionSmall: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(20),
  },
  sectionTitle: {
    fontSize: moderateScale(16, 0.4),
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: verticalScale(1),
    fontFamily: 'Nunito-ExtraBold',
  },
  sectionTitleTablet: {
    fontSize: moderateScale(18, 0.4),
    marginBottom: verticalScale(6),
    fontFamily: 'Nunito-ExtraBold',
  },
  sectionTitleSmall: {
    fontSize: moderateScale(14, 0.4),
    marginBottom: verticalScale(2),
    fontFamily: 'Nunito-ExtraBold',
  },
  sectionSubtitle: {
    fontSize: moderateScale(12, 0.4),
    color: '#718096',
    marginBottom: verticalScale(20),
    fontFamily: 'Nunito-Bold',
  },
  sectionSubtitleTablet: {
    fontSize: moderateScale(14, 0.4),
    marginBottom: verticalScale(24),
  },
  sectionSubtitleSmall: {
    fontSize: moderateScale(11, 0.4),
    marginBottom: verticalScale(16),
  },

  // Actions Container
  actionsContainer: {
    gap: verticalScale(8),
  },
  actionsContainerTablet: {
    gap: verticalScale(16),
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: scale(16),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  actionCardTablet: {
    padding: scale(20),
    borderRadius: moderateScale(14),
  },
  actionCardSmall: {
    padding: scale(12),
    borderRadius: moderateScale(10),
  },
  actionIcon: {
    width: scale(48),
    height: scale(48),
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(16),
  },
  actionIconTablet: {
    width: scale(56),
    height: scale(56),
    borderRadius: moderateScale(14),
    marginRight: scale(20),
  },
  actionIconSmall: {
    width: scale(40),
    height: scale(40),
    borderRadius: moderateScale(10),
    marginRight: scale(12),
  },
  actionContent: {
    flex: 1,
  },
  actionContentTablet: {
    flex: 1,
  },
  actionTitle: {
    fontSize: moderateScale(14, 0.4),
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: verticalScale(2),
    fontFamily: 'Nunito-Bold',
  },
  actionTitleTablet: {
    fontSize: moderateScale(16, 0.4),
    marginBottom: verticalScale(4),
    fontFamily: 'Nunito-Bold',
  },
  actionTitleSmall: {
    fontSize: moderateScale(12, 0.4),
    marginBottom: verticalScale(1),
  },
  actionDescription: {
    fontSize: moderateScale(12, 0.4),
    color: '#718096',
    lineHeight: verticalScale(16),
    fontFamily: 'Nunito-Bold',
  },
  actionDescriptionTablet: {
    fontSize: moderateScale(14, 0.4),
    lineHeight: verticalScale(18),
    fontFamily: 'Nunito-Bold',
  },
  actionDescriptionSmall: {
    fontSize: moderateScale(11, 0.4),
    lineHeight: verticalScale(14),
    fontFamily: 'Nunito-Bold',
  },
  chevronContainer: {
    width: scale(32),
    height: scale(32),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(8),
  },
  chevronContainerTablet: {
    width: scale(36),
    height: scale(36),
    borderRadius: moderateScale(10),
  },
  chevronContainerSmall: {
    width: scale(28),
    height: scale(28),
    borderRadius: moderateScale(6),
  },
});
