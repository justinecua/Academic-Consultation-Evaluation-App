import { StyleSheet } from 'react-native';
import { getFontSize } from '../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },

  listContent: {
    paddingTop: 16,
    paddingBottom: 100,
  },

  listContent: {
    paddingTop: 16,
    paddingBottom: 100,
  },

  listContentEmpty: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  header: {
    padding: 24,
    paddingBottom: 16,
    backgroundColor: '#0D2460',
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontSize: getFontSize(24),
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
    fontFamily: 'Nunito-ExtraBold',
  },
  headerSubtitle: {
    fontSize: getFontSize(14),
    color: '#8BAAD8',
    fontWeight: '400',
    fontFamily: 'Nunito-SemiBold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FA',
  },
  loadingText: {
    marginTop: 16,
    fontSize: getFontSize(13),
    color: '#8096B8',
    fontWeight: '500',
    fontFamily: 'Nunito-SemiBold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#E2E8F2',
    shadowColor: '#0D2460',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  itemContent: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  teacherName: {
    fontSize: getFontSize(12),
    color: '#8096B8',
    fontWeight: '500',
    marginLeft: 6,
    flex: 1,
    fontFamily: 'Nunito-SemiBold',
  },
  ratingPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    marginLeft: 8,
  },
  ratingText: {
    fontSize: getFontSize(12),
    fontWeight: '700',
    fontFamily: 'Nunito-Bold',
  },
  title: {
    fontSize: getFontSize(14),
    fontWeight: '700',
    color: '#0D2460',
    marginBottom: 10,
    fontFamily: 'Nunito-Bold',
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: getFontSize(11),
    color: '#A0AECB',
    marginLeft: 5,
    fontFamily: 'Nunito-SemiBold',
  },
  chevronContainer: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#F0F4FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  separator: {
    height: 10,
  },
  emptyList: {
    flexGrow: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    paddingTop: 80,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EBF1FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderWidth: 0.5,
    borderColor: '#C5D4F0',
  },
  emptyTitle: {
    fontSize: getFontSize(18),
    fontWeight: '700',
    color: '#0D2460',
    marginBottom: 8,
    fontFamily: 'Nunito-ExtraBold',
  },
  emptySubtitle: {
    fontSize: getFontSize(14),
    color: '#8096B8',
    textAlign: 'center',
    lineHeight: getFontSize(22),
    marginBottom: 24,
    fontFamily: 'Nunito-SemiBold',
  },
  refreshButton: {
    backgroundColor: '#0D2460',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  refreshButtonText: {
    color: '#FFFFFF',
    fontSize: getFontSize(14),
    fontWeight: '600',
    fontFamily: 'Nunito-Bold',
  },
});
