import { StyleSheet } from 'react-native';
import { getFontSize } from '../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 24,
    paddingBottom: 1,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: getFontSize(24),
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: getFontSize(16),
    color: '#718096',
    fontWeight: '400',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    marginTop: 16,
    fontSize: getFontSize(16),
    color: '#718096',
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    marginTop: 2,
  },
  itemContent: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  teacherName: {
    fontSize: getFontSize(14),
    color: '#4A5568',
    fontWeight: '500',
    marginLeft: 6,
    flex: 1,
  },
  ratingPill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  ratingText: {
    fontSize: getFontSize(12),
    fontWeight: '600',
  },
  title: {
    fontSize: getFontSize(12),
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 12,
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
    fontSize: getFontSize(13),
    color: '#718096',
    marginLeft: 6,
  },
  chevronContainer: {
    marginLeft: 12,
  },
  separator: {
    height: 8,
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
    backgroundColor: '#F7FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  emptyTitle: {
    fontSize: getFontSize(18),
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: getFontSize(16),
    color: '#718096',
    textAlign: 'center',
    lineHeight: getFontSize(22),
    marginBottom: 24,
  },
  refreshButton: {
    backgroundColor: '#5E72E4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  refreshButtonText: {
    color: '#FFFFFF',
    fontSize: getFontSize(16),
    fontWeight: '600',
  },
});
