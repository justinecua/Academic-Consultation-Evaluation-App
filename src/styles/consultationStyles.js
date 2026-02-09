import { StyleSheet } from 'react-native';
import { getFontSize } from '../utils/font';

export const COLORS = {
  bg: '#FFFFFF',
  surface: '#FFFFFF',
  text: '#0F172A',
  muted: '#64748B',
  primary: '#5E72E4',
  badgeBg: '#EEF2FF',
  badgeText: '#4F46E5',
  emptyBorder: '#DDE3FF',
  emptyBg: '#F7F8FF',
};

export const consultationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  listContent: {
    paddingTop: 4,
    paddingBottom: 16,
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
    marginTop: 10,
    color: COLORS.muted,
    fontSize: getFontSize(13),
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginHorizontal: 12,
    marginTop: 6,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },

  name: {
    fontSize: getFontSize(14),
    fontWeight: '700',
    color: COLORS.text,
  },

  subject: {
    fontSize: getFontSize(12.5),
    color: COLORS.text,
    marginTop: 1,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },

  metaText: {
    marginLeft: 4,
    fontSize: getFontSize(11),
    color: COLORS.muted,
  },

  badge: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: COLORS.badgeBg,
  },

  badgeText: {
    fontSize: getFontSize(10.5),
    fontWeight: '600',
    color: COLORS.badgeText,
  },

  emptyWrap: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  emptyTitle: {
    color: COLORS.text,
    fontSize: getFontSize(15),
    fontWeight: '700',
  },

  emptyText: {
    marginTop: 6,
    textAlign: 'center',
    color: COLORS.muted,
    fontSize: getFontSize(12),
  },

  retryBtn: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.emptyBorder,
    backgroundColor: COLORS.emptyBg,
  },

  retryText: {
    color: COLORS.primary,
    fontSize: getFontSize(12),
    fontWeight: '700',
  },

  separator: {
    height: 4,
  },
});
