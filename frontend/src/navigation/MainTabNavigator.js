import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home,
  ClipboardList,
  BarChart2,
  BookOpenText,
  User,
} from 'lucide-react-native';

import DashboardScreen from '../screens/Dashboard';
import ConsultationFormScreen from '../screens/Consultation/ConsultationFormScreen';
import EvaluationFormScreen from '../screens/Evaluation/EvaluationFormScreen';
import ProfileScreen from '../screens/Profile';

// 👇 new screens
import EvaluationListScreen from '../screens/Evaluation/EvaluationListScreen';
import EvaluationDetailScreen from '../screens/Evaluation/EvaluationDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'Dashboard')
          return <Home color={color} size={size} />;
        if (route.name === 'Consultation')
          return <BookOpenText color={color} size={size} />;
        if (route.name === 'Evaluation')
          return <ClipboardList color={color} size={size} />;
        if (route.name === 'Reports')
          return <BarChart2 color={color} size={size} />;
        if (route.name === 'Profile') return <User color={color} size={size} />;
      },
      tabBarActiveTintColor: '#1E88E5',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Consultation" component={ConsultationFormScreen} />
    <Tab.Screen name="Evaluation" component={EvaluationFormScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    {/* Bottom tabs */}
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{ headerShown: false }}
    />

    {/* Extra screens NOT in bottom tabs */}
    <Stack.Screen
      name="EvaluationList"
      component={EvaluationListScreen}
      options={{ title: 'My Evaluations' }}
    />
    <Stack.Screen
      name="EvaluationDetail"
      component={EvaluationDetailScreen}
      options={{ title: 'Evaluation Detail' }}
    />
  </Stack.Navigator>
);

export default RootNavigator;
