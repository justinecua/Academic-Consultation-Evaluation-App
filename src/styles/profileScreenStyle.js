import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#EEF2FA',
  },

  safeInner: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 16,
  },

  // ── Hero Card ──────────────────────────────────────────────────
  heroCard: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 28,
    shadowColor: '#0D2460',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 10,
  },

  heroBg: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#1A3A7A',
    opacity: 0.45,
  },

  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 24,
    gap: 18,
  },

  avatarRing: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2.5,
    borderColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarInner: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#1E4DB7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarInitials: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    letterSpacing: 1,
  },

  heroText: {
    flex: 1,
    gap: 8,
  },

  heroName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    letterSpacing: 0.2,
  },

  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },

  heroBadgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4ADE80',
  },

  heroBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.85)',
    fontFamily: 'Nunito-SemiBold',
    letterSpacing: 0.3,
  },

  sectionGroup: {
    marginBottom: 20,
  },

  groupLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7A92BE',
    fontFamily: 'Nunito-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.9,
    marginBottom: 10,
    paddingHorizontal: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    overflow: 'hidden',
    marginBottom: 12,
  },

  card2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    overflow: 'hidden',
    marginBottom: 12,
    marginTop: -20,
  },

  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EBF0FB',
  },

  fieldContainerLast: {
    borderBottomWidth: 0,
  },

  fieldHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  fieldLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fieldIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: '#EBF1FD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fieldLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7A92BE',
    fontFamily: 'Nunito-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginLeft: 15,
  },

  fieldValue: {
    fontSize: 15,
    color: '#0D2460',
    fontWeight: '600',
    fontFamily: 'Nunito-Bold',
    paddingLeft: 40,
    marginTop: 2,
  },

  fieldEmpty: {
    fontSize: 14,
    color: '#BDD0EE',
    fontStyle: 'italic',
    fontFamily: 'Nunito-Regular',
    paddingLeft: 40,
    marginTop: 2,
  },

  // ── Version Badge ──────────────────────────────────────────────
  versionBadge: {
    backgroundColor: '#EBF1FD',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 0.5,
    borderColor: '#C5D8F7',
  },

  versionBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3B6FD4',
    fontFamily: 'Nunito-Bold',
    letterSpacing: 0.2,
  },

  // ── Accordion ─────────────────────────────────────────────────
  accordionItem: {
    overflow: 'hidden',
  },

  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 15,
  },

  accordionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },

  accordionIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: '#EBF1FD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  accordionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A3A7A',
    fontFamily: 'Nunito-Bold',
  },

  accordionDivider: {
    height: 0.5,
    backgroundColor: '#EBF0FB',
    marginHorizontal: 18,
  },

  accordionBody: {
    paddingHorizontal: 18,
    paddingTop: 4,
    paddingBottom: 16,
    backgroundColor: '#F8FAFF',
    borderTopWidth: 0.5,
    borderTopColor: '#EBF0FB',
  },

  accordionText: {
    fontSize: 13.5,
    color: '#4A6080',
    fontFamily: 'Nunito-Regular',
    lineHeight: 21,
  },

  // ── Footer ─────────────────────────────────────────────────────
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    borderTopWidth: 0.5,
    borderTopColor: '#DDE6F5',
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#FFF5F5',
    borderWidth: 0.5,
    borderColor: '#FEB2B2',
  },

  logoutText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E53E3E',
    fontFamily: 'Nunito-Bold',
    letterSpacing: 0.2,
  },
});
