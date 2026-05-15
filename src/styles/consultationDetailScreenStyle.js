import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#0D2460',
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    flex: 1,
    marginRight: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#0D2460',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: '#E2E8F2',
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
    backgroundColor: '#EBF1FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: '#0D2460',
    fontFamily: 'Nunito-Bold',
  },

  // Info Grid
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
    fontSize: 13,
    color: '#8096B8',
    fontWeight: '500',
    flex: 1,
    fontFamily: 'Nunito-SemiBold',
  },
  infoValue: {
    fontSize: 13,
    color: '#0D2460',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Nunito-Bold',
  },

  // Schedule
  scheduleContainer: {
    gap: 4,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  scheduleIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#F0F4FB',
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleLabel: {
    fontSize: 11,
    color: '#A0AECB',
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontFamily: 'Nunito-Bold',
  },
  scheduleValue: {
    fontSize: 14,
    color: '#0D2460',
    fontWeight: '600',
    fontFamily: 'Nunito-Bold',
  },
  scheduleSubtext: {
    fontSize: 12,
    color: '#A0AECB',
    marginTop: 2,
    fontFamily: 'Nunito-SemiBold',
  },

  // Text Content
  textContent: {
    gap: 0,
  },
  textSection: {
    paddingVertical: 12,
  },
  textLabel: {
    fontSize: 11,
    color: '#A0AECB',
    fontWeight: '600',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontFamily: 'Nunito-Bold',
  },
  textValue: {
    fontSize: 12,
    color: '#0D2460',
    fontWeight: '400',
    lineHeight: 21,
  },

  divider: {
    height: 0.5,
    backgroundColor: '#E2E8F2',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FA',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 13,
    color: '#8096B8',
    fontFamily: 'Nunito-SemiBold',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FA',
    paddingHorizontal: 40,
  },
  errorText: {
    fontSize: 15,
    color: '#0D2460',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Nunito-Bold',
  },
  retryButton: {
    backgroundColor: '#0D2460',
    paddingHorizontal: 24,
    paddingVertical: 11,
    borderRadius: 12,
    marginTop: 12,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Nunito-Bold',
  },

  bottomSpacing: {
    height: 100,
  },
});
