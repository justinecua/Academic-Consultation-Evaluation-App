import { StyleSheet } from 'react-native';
import { getFontSize } from '../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  headerTitle: {
    fontSize: getFontSize(14),
    fontWeight: '700',
    color: '#1E293B',
  },
  iconButton: {
    backgroundColor: '#F1F5F9',
    padding: 6,
    borderRadius: 8,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    marginTop: 10,
    fontSize: getFontSize(12),
    color: '#64748B',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  errorText: {
    fontSize: getFontSize(13),
    fontWeight: '700',
    color: '#DC2626',
  },
  errorSubtext: {
    fontSize: getFontSize(11),
    color: '#64748B',
    marginTop: 3,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: getFontSize(15),
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 6,
  },

  infoSection: { marginTop: 6 },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  infoItem: { flex: 1, marginRight: 8 },
  infoLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  infoLabel: {
    fontSize: getFontSize(14),
    color: '#64748B',
    marginLeft: 3,
  },
  infoValue: {
    fontSize: getFontSize(13),
    color: '#1E293B',
    fontWeight: '500',
  },

  scheduleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  scheduleItem: { flex: 1, alignItems: 'center' },
  scheduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  scheduleTitle: {
    marginLeft: 5,
    color: '#475569',
    fontWeight: '600',
    fontSize: getFontSize(13),
  },
  scheduleDate: {
    color: '#1E293B',
    fontWeight: '500',
    fontSize: getFontSize(13),
  },
  scheduleTime: { color: '#64748B', fontSize: getFontSize(13) },
  scheduleDivider: {
    width: 1,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 6,
  },

  ratingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  ratingCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingNumber: {
    fontSize: getFontSize(18),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  ratingLabel: {
    fontSize: getFontSize(14),
    fontWeight: '600',
    color: '#1E293B',
  },
  ratingSubtext: {
    marginTop: 5,
    fontSize: getFontSize(12),
    color: '#64748B',
  },

  commentsContainer: {
    flexDirection: 'row',
    marginTop: 6,
    backgroundColor: '#F8FAFC',
    padding: 8,
    borderRadius: 8,
  },
  comments: {
    marginLeft: 6,
    color: '#1E293B',
    fontSize: getFontSize(12),
  },

  responseItem: { paddingVertical: 18 },
  responseBorder: { borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  question: {
    color: '#1E293B',
    marginBottom: 12,
    fontSize: getFontSize(13),
  },
  responseDetails: { flexDirection: 'row', alignItems: 'center' },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginRight: 6,
  },
  ratingText: { fontWeight: '700', fontSize: getFontSize(13) },
  ratingDescription: { color: '#475569', fontSize: getFontSize(13) },

  bottomSpacing: { height: 30 },
});
