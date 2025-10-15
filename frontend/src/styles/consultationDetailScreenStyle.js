import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  // Header Styles
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
    fontSize: 20,
    fontWeight: '600',
    color: '#0F172A',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F8FAFC',
  },
  // Card Styles
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
  },
  // Info Grid Styles
  infoGrid: {
    gap: 0,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  fullWidthRow: {
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '400',
    flex: 1,
    textAlign: 'right',
  },

  scheduleContainer: {
    gap: 12,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  scheduleIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 2,
  },
  scheduleValue: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '400',
  },
  scheduleSubtext: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
  // Text Content Styles
  textContent: {
    gap: 0,
  },
  textSection: {
    paddingVertical: 12,
  },
  textLabel: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 8,
  },
  textValue: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '400',
    lineHeight: 20,
  },
  // Common Styles
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  // Loading & Error States
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#64748B',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 40,
  },
  errorText: {
    fontSize: 16,
    color: '#0F172A',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
  },
  retryButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 12,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  bottomSpacing: {
    height: 20,
  },
});
