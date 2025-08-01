import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  FileText,
  ClipboardList,
  BarChart2,
  User,
} from 'lucide-react-native';
import DashboardScreen from '../screens/Dashboard';
import ConsultationFormScreen from '../screens/Consultation/ConsultationFormScreen';
import EvaluationFormScreen from '../screens/Evaluation/EvaluationFormScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Dashboard') {
            return <Home color={color} size={size} />;
          } else if (route.name === 'Consultation') {
            return <FileText color={color} size={size} />;
          } else if (route.name === 'Evaluation') {
            return <ClipboardList color={color} size={size} />;
          } else if (route.name === 'Reports') {
            return <BarChart2 color={color} size={size} />;
          } else if (route.name === 'Profile') {
            return <User color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: '#1E88E5',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Consultation" component={ConsultationFormScreen} />
      <Tab.Screen name="Evaluation" component={EvaluationFormScreen} />
      {/* Add Reports and Profile if you have corresponding screens */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
