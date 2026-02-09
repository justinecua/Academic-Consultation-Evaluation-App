import { StyleSheet } from 'react-native';
import { getFontSize } from '../utils/font';

const COLORS = {
  background: '#FCFCFD',
  surface: '#FFFFFF',
  primary: '#111827',
  secondary: '#6B7280',
  muted: '#9CA3AF',
  border: '#E5E7EB',
  accent: '#4F46E5',
  accentLight: '#EEF2FF',
  success: '#059669',
  warning: '#D97706',
  error: '#DC2626',
  overlay: '#F9FAFB',
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
    color: COLORS.primary,
    letterSpacing: -0.3,
  },
  h2: {
    fontSize: getFontSize(15),
    fontWeight: '600',
    color: COLORS.primary,
    letterSpacing: -0.2,
  },
  body: {
    fontSize: getFontSize(14),
    color: COLORS.primary,
    lineHeight: 20,
  },
  bodySmall: {
    fontSize: getFontSize(13),
    color: COLORS.secondary,
    lineHeight: 18,
  },
  caption: {
    fontSize: getFontSize(12),
    color: COLORS.muted,
    letterSpacing: 0.2,
  },
  label: {
    fontSize: getFontSize(12),
    fontWeight: '500',
    color: COLORS.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
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
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: TYPOGRAPHY.h1,
  headerSubtitle: TYPOGRAPHY.caption,

  iconButton: {
    padding: SPACING.xs,
    borderRadius: 8,
  },

  stateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
  },
  stateText: TYPOGRAPHY.h2,
  stateSubtext: TYPOGRAPHY.caption,
  retryButton: {
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xs,
    backgroundColor: COLORS.accent,
    borderRadius: 6,
  },
  retryText: {
    color: COLORS.surface,
    fontWeight: '500',
  },

  card: {
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.sm,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
  },

  cardHeader: {
    marginBottom: SPACING.md,
  },
  cardTitle: {
    ...TYPOGRAPHY.h2,
    marginBottom: SPACING.xs,
  },
  cardSubtitle: TYPOGRAPHY.label,

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
    borderColor: COLORS.surface,
  },
  ratingNumber: {
    fontSize: getFontSize(22),
    fontWeight: '700',
    color: COLORS.surface,
  },

  commentContainer: {
    backgroundColor: COLORS.overlay,
    padding: SPACING.md,
    borderRadius: 8,
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
    borderBottomWidth: 1,
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
    borderRadius: 6,
    backgroundColor: COLORS.accentLight,
  },
  ratingValue: {
    ...TYPOGRAPHY.caption,
    fontWeight: '600',
    color: COLORS.accent,
    marginRight: 4,
  },
  ratingLabel: TYPOGRAPHY.caption,
});
