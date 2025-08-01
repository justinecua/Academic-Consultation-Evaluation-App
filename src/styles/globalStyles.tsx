import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors/colors';
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: colors.primaryLight,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  flaggedCard: {
    backgroundColor: colors.warningLight,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  quickActions: {
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingLabel: {
    marginRight: 10,
  },
  ratingButton: {
    padding: 8,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  ratingButtonSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  section: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
