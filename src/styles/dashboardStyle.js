import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  contentContainer: {
    paddingBottom: verticalScale(40),
  },
  contentContainerTablet: {
    paddingBottom: verticalScale(60),
  },

  header: {
    flexDirection: 'column',
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(32),
    backgroundColor: '#0D2460',
    borderRadius: 10,
  },
  headerTablet: {
    paddingHorizontal: scale(40),
    paddingTop: verticalScale(32),
    paddingBottom: verticalScale(44),
  },
  headerSmall: {
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(28),
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerContent: {
    flex: 1,
  },
  greeting: {
    fontSize: moderateScale(11, 0.4),
    color: '#8BAAD8',
    fontWeight: '500',
    marginBottom: verticalScale(4),
    fontFamily: 'Nunito-SemiBold',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  greetingTablet: {
    fontSize: moderateScale(13, 0.4),
    marginBottom: verticalScale(6),
  },
  greetingSmall: {
    fontSize: moderateScale(10, 0.4),
    marginBottom: verticalScale(2),
    fontFamily: 'Nunito-SemiBold',
  },
  welcome: {
    fontSize: moderateScale(20, 0.4),
    fontWeight: '700',
    fontFamily: 'Nunito-Bold',
    color: '#FFFFFF',
    marginBottom: verticalScale(6),
  },
  welcomeTablet: {
    fontSize: moderateScale(24, 0.4),
    fontFamily: 'Nunito-Bold',
  },
  welcomeSmall: {
    fontSize: moderateScale(16, 0.4),
    marginBottom: verticalScale(4),
    fontFamily: 'Nunito-Bold',
  },
  welcomeAccent: {
    color: '#4A90D9',
  },
  avatar: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    backgroundColor: '#1A3A7A',
    borderWidth: 2,
    borderColor: '#2E5BA8',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(12),
  },
  avatarTablet: {
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
  },
  avatarSmall: {
    width: scale(38),
    height: scale(38),
    borderRadius: scale(19),
  },

  headerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#1A3A7A',
    borderRadius: scale(20),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(5),
    marginTop: verticalScale(14),
    gap: scale(6),
  },
  headerBadgeText: {
    fontSize: moderateScale(11, 0.4),
    color: '#8BAAD8',
    fontFamily: 'Nunito-SemiBold',
  },
  headerBadgeTextBold: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(8),
    paddingBottom: verticalScale(8),
    backgroundColor: 'transparent',
    marginTop: verticalScale(-18),
    zIndex: 2,
    gap: scale(6),
  },
  statsContainerTablet: {
    paddingHorizontal: scale(40),
    marginTop: verticalScale(-24),
    gap: scale(16),
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: scale(12),
    borderRadius: moderateScale(14),
    borderWidth: 0.5,
    borderColor: '#E2E8F2',
    shadowColor: '#0D2460',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    gap: scale(12),
  },
  statCardTablet: {
    padding: scale(18),
    borderRadius: moderateScale(16),
  },
  statCardSmall: {
    padding: scale(10),
    gap: scale(8),
  },
  statIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statIconTablet: {
    width: scale(48),
    height: scale(48),
    borderRadius: moderateScale(12),
  },
  statIconSmall: {
    width: scale(34),
    height: scale(34),
    borderRadius: moderateScale(8),
  },
  statNumber: {
    fontSize: moderateScale(22, 0.4),
    fontWeight: '700',
    color: '#0D2460',
    fontFamily: 'Nunito-Bold',
    lineHeight: moderateScale(26, 0.4),
  },
  statNumberSmall: {
    fontSize: moderateScale(18, 0.4),
    fontFamily: 'Nunito-Bold',
  },
  statLabel: {
    fontSize: moderateScale(9),
    color: '#8096B8',
    marginTop: verticalScale(2),
    fontWeight: '900',
    fontFamily: 'Nunito-SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  statLabelSmall: {
    fontSize: moderateScale(9, 0.4),
    fontFamily: 'Nunito-SemiBold',
  },
  statText: {
    flex: 1,
  },

  section: {
    paddingHorizontal: scale(8),
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(24),
  },
  sectionTablet: {
    paddingHorizontal: scale(40),
    paddingTop: verticalScale(32),
  },
  sectionSmall: {
    paddingHorizontal: scale(14),
    paddingTop: verticalScale(20),
  },
  sectionTitle: {
    fontSize: moderateScale(15, 0.4),
    fontWeight: '700',
    color: '#0D2460',
    marginBottom: verticalScale(2),
    fontFamily: 'Nunito-ExtraBold',
    letterSpacing: -0.2,
  },
  sectionTitleTablet: {
    fontSize: moderateScale(18, 0.4),
    marginBottom: verticalScale(4),
    fontFamily: 'Nunito-ExtraBold',
  },
  sectionTitleSmall: {
    fontSize: moderateScale(13, 0.4),
    marginBottom: verticalScale(2),
    fontFamily: 'Nunito-ExtraBold',
  },
  sectionSubtitle: {
    fontSize: moderateScale(12, 0.4),
    color: '#8096B8',
    marginBottom: verticalScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
  sectionSubtitleTablet: {
    fontSize: moderateScale(14, 0.4),
    marginBottom: verticalScale(20),
  },
  sectionSubtitleSmall: {
    fontSize: moderateScale(11, 0.4),
    marginBottom: verticalScale(12),
  },

  actionsContainer: {
    gap: verticalScale(10),
  },
  actionsContainerTablet: {
    gap: verticalScale(14),
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: scale(14),
    borderRadius: moderateScale(14),
    borderWidth: 0.5,
    borderColor: '#E2E8F2',
    shadowColor: '#0D2460',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  actionCardTablet: {
    padding: scale(18),
    borderRadius: moderateScale(16),
  },
  actionCardSmall: {
    padding: scale(11),
    borderRadius: moderateScale(12),
  },
  actionIcon: {
    width: scale(46),
    height: scale(46),
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(14),
    flexShrink: 0,
  },
  actionIconTablet: {
    width: scale(54),
    height: scale(54),
    borderRadius: moderateScale(14),
    marginRight: scale(18),
  },
  actionIconSmall: {
    width: scale(38),
    height: scale(38),
    borderRadius: moderateScale(10),
    marginRight: scale(10),
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: moderateScale(14, 0.4),
    fontWeight: '600',
    color: '#0D2460',
    marginBottom: verticalScale(2),
    fontFamily: 'Nunito-Bold',
  },
  actionTitleTablet: {
    fontSize: moderateScale(16, 0.4),
    marginBottom: verticalScale(3),
    fontFamily: 'Nunito-Bold',
  },
  actionTitleSmall: {
    fontSize: moderateScale(12, 0.4),
    marginBottom: verticalScale(1),
    fontFamily: 'Nunito-Bold',
  },
  actionDescription: {
    fontSize: moderateScale(12, 0.4),
    color: '#8096B8',
    lineHeight: verticalScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
  actionDescriptionTablet: {
    fontSize: moderateScale(13, 0.4),
    lineHeight: verticalScale(18),
  },
  actionDescriptionSmall: {
    fontSize: moderateScale(11, 0.4),
    lineHeight: verticalScale(14),
  },
  chevronContainer: {
    width: scale(30),
    height: scale(30),
    borderRadius: moderateScale(8),
    backgroundColor: '#F0F4FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(8),
    flexShrink: 0,
  },
  chevronContainerTablet: {
    width: scale(34),
    height: scale(34),
    borderRadius: moderateScale(10),
  },
  chevronContainerSmall: {
    width: scale(26),
    height: scale(26),
    borderRadius: moderateScale(6),
  },

  countBadge: {
    backgroundColor: '#EBF1FC',
    borderRadius: scale(20),
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(2),
    marginLeft: scale(6),
  },
  countBadgeText: {
    fontSize: moderateScale(11, 0.4),
    color: '#1A4BAD',
    fontFamily: 'Nunito-Bold',
    fontWeight: '600',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: verticalScale(14),
    paddingBottom: verticalScale(10),
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderTopColor: '#E2E8F2',
  },
  navItem: {
    alignItems: 'center',
    gap: verticalScale(4),
  },
  navLabel: {
    fontSize: moderateScale(10, 0.4),
    color: '#8096B8',
    fontFamily: 'Nunito-SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  navLabelActive: {
    color: '#0D2460',
  },
  navDot: {
    width: scale(4),
    height: scale(4),
    borderRadius: scale(2),
    backgroundColor: '#1A4BAD',
  },
});
