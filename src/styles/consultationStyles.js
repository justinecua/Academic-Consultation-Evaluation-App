import { StyleSheet } from 'react-native';
import { getFontSize } from '../utils/font';

export const COLORS = {
  bg: '#F4F6FA',
  surface: '#FFFFFF',
  text: '#0D2460',
  muted: '#A0AECB',
  secondary: '#8096B8',
  primary: '#0D2460',
  accent: '#1A4BAD',
  badgeBg: '#EBF1FC',
  badgeText: '#1A4BAD',
  border: '#E2E8F2',
  emptyBorder: '#C5D4F0',
  emptyBg: '#EBF1FC',
};

export const consultationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  listContent: {
    paddingTop: 16,
    paddingBottom: 100,
  },

  listContentEmpty: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  loadingWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
  },

  loadingText: {
    marginTop: 12,
    color: COLORS.muted,
    fontSize: getFontSize(13),
    fontFamily: 'Nunito-SemiBold',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 14,
    backgroundColor: COLORS.surface,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  name: {
    fontSize: getFontSize(14),
    fontWeight: '700',
    color: COLORS.text,
    fontFamily: 'Nunito-Bold',
  },

  subject: {
    fontSize: getFontSize(12),
    color: COLORS.secondary,
    marginTop: 2,
    fontFamily: 'Nunito-SemiBold',
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  metaText: {
    marginLeft: 5,
    fontSize: getFontSize(11),
    color: COLORS.muted,
    fontFamily: 'Nunito-SemiBold',
  },

  badge: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: COLORS.badgeBg,
    flexShrink: 0,
  },

  badgeText: {
    fontSize: getFontSize(10),
    fontWeight: '600',
    color: COLORS.badgeText,
    fontFamily: 'Nunito-Bold',
  },

  emptyWrap: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 48,
  },

  emptyIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.emptyBg,
    borderWidth: 0.5,
    borderColor: COLORS.emptyBorder,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  emptyTitle: {
    color: COLORS.text,
    fontSize: getFontSize(17),
    fontWeight: '700',
    fontFamily: 'Nunito-ExtraBold',
    marginBottom: 6,
  },

  emptyText: {
    marginTop: 4,
    textAlign: 'center',
    color: COLORS.secondary,
    fontSize: getFontSize(13),
    lineHeight: 20,
    fontFamily: 'Nunito-SemiBold',
  },

  retryBtn: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: COLORS.emptyBorder,
    backgroundColor: COLORS.emptyBg,
  },

  retryText: {
    color: COLORS.accent,
    fontSize: getFontSize(13),
    fontWeight: '700',
    fontFamily: 'Nunito-Bold',
  },

  separator: {
    height: 10,
  },
});
