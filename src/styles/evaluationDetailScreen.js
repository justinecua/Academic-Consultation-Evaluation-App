import { StyleSheet } from 'react-native';
import { getFontSize } from '../utils/font';

const COLORS = {
  background: '#F4F6FA',
  surface: '#FFFFFF',
  primary: '#0D2460',
  secondary: '#8096B8',
  muted: '#A0AECB',
  border: '#E2E8F2',
  accent: '#1A4BAD',
  accentLight: '#EBF1FC',
  success: '#059669',
  warning: '#D97706',
  error: '#DC2626',
  overlay: '#F0F4FB',
  navyDark: '#0A1C4A',
};

const SPACING = {
  xs: 6,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

const TYPOGRAPHY = {
  h1: {
    fontSize: getFontSize(18),
    fontWeight: '700',
    color: COLORS.surface,
    letterSpacing: -0.3,
    fontFamily: 'Nunito-ExtraBold',
  },
  h2: {
    fontSize: getFontSize(15),
    fontWeight: '600',
    color: COLORS.primary,
    letterSpacing: -0.2,
    fontFamily: 'Nunito-Bold',
  },
  body: {
    fontSize: getFontSize(14),
    color: COLORS.primary,
    lineHeight: 20,
    fontFamily: 'Nunito-SemiBold',
  },
  bodySmall: {
    fontSize: getFontSize(13),
    color: COLORS.secondary,
    lineHeight: 18,
    fontFamily: 'Nunito-SemiBold',
  },
  caption: {
    fontSize: getFontSize(12),
    color: COLORS.muted,
    letterSpacing: 0.2,
    fontFamily: 'Nunito-SemiBold',
  },
  label: {
    fontSize: getFontSize(11),
    fontWeight: '600',
    color: COLORS.muted,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    fontFamily: 'Nunito-Bold',
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: SPACING.xxl,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.primary,
    borderBottomWidth: 0,
  },
  headerTitle: TYPOGRAPHY.h1,
  headerSubtitle: {
    ...TYPOGRAPHY.caption,
    color: '#8BAAD8',
    marginTop: 3,
    fontFamily: 'Nunito-SemiBold',
  },

  iconButton: {
    padding: SPACING.xs,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },

  stateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  stateSubtext: {
    ...TYPOGRAPHY.caption,
    marginTop: SPACING.sm,
  },
  retryButton: {
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xs,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  retryText: {
    color: COLORS.surface,
    fontWeight: '600',
    fontFamily: 'Nunito-Bold',
    fontSize: getFontSize(13),
  },

  // Cards
  card: {
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.sm,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    padding: SPACING.lg,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },

  cardHeader: {
    marginBottom: SPACING.md,
  },
  cardTitle: {
    ...TYPOGRAPHY.h2,
    marginBottom: SPACING.xs,
  },
  cardSubtitle: TYPOGRAPHY.label,

  // Grid layout inside cards
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SPACING.xs,
  },
  gridItem: {
    width: '50%',
    paddingHorizontal: SPACING.xs,
    marginBottom: SPACING.md,
  },
  gridLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  gridValue: {
    ...TYPOGRAPHY.body,
    marginTop: 2,
  },

  // Schedule
  scheduleContainer: {
    flexDirection: 'row',
  },
  scheduleItem: {
    flex: 1,
  },
  scheduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  scheduleDivider: {
    width: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: SPACING.lg,
  },
  scheduleDate: {
    ...TYPOGRAPHY.body,
    marginBottom: 2,
  },

  ratingContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.sm,
  },
  ratingCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  ratingNumber: {
    fontSize: getFontSize(22),
    fontWeight: '700',
    color: COLORS.surface,
    fontFamily: 'Nunito-ExtraBold',
  },

  commentContainer: {
    backgroundColor: COLORS.overlay,
    padding: SPACING.md,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  commentIcon: {
    marginTop: 2,
  },
  commentText: {
    ...TYPOGRAPHY.bodySmall,
    flex: 1,
  },

  responseContainer: {
    marginTop: SPACING.xs,
  },
  responseItem: {
    paddingVertical: SPACING.md,
  },
  responseDivider: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  questionText: {
    ...TYPOGRAPHY.bodySmall,
    marginBottom: SPACING.sm,
  },
  ratingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: COLORS.accentLight,
  },
  ratingValue: {
    ...TYPOGRAPHY.caption,
    fontWeight: '700',
    color: COLORS.accent,
    marginRight: 4,
    fontFamily: 'Nunito-Bold',
  },
  ratingLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.secondary,
  },
});
