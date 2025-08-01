export const colors = {
  // Primary colors
  primary: '#1E88E5', // Main blue color
  primaryDark: '#1565C0', // Darker blue
  primaryLight: '#64B5F6', // Lighter blue

  // Secondary colors
  secondary: '#26A69A', // Teal
  secondaryDark: '#00897B',
  secondaryLight: '#80CBC4',

  // Status colors
  success: '#4CAF50', // Green
  successLight: '#81C784',
  warning: '#FFA000', // Amber
  warningLight: '#FFD54F',
  error: '#E53935', // Red
  errorLight: '#EF9A9A',

  // Grayscale
  white: '#FFFFFF',
  gray100: '#F5F5F5', // Very light gray
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
  black: '#000000',

  // Text colors
  textPrimary: '#212121', // Dark gray for primary text
  textSecondary: '#757575', // Medium gray for secondary text
  textDisabled: '#BDBDBD', // Light gray for disabled text
  textInverse: '#FFFFFF', // White text for dark backgrounds

  // Background colors
  background: '#FFFFFF', // White background
  backgroundDark: '#F5F5F5', // Light gray background
  surface: '#FFFFFF', // Surface color for cards
  surfaceDark: '#EEEEEE',

  // Borders
  border: '#E0E0E0', // Light gray border
  borderDark: '#BDBDBD',

  // App-specific colors
  consultationCard: '#E3F2FD', // Light blue for consultation cards
  evaluationCard: '#E8F5E9', // Light green for evaluation cards
  highlight: '#FFF9C4', // Yellow highlight
};

// Aliases for semantic usage (optional but recommended)
colors.main = colors.primary;
colors.accent = colors.secondary;
colors.danger = colors.error;
