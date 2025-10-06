import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import {
  Home,
  ClipboardList,
  BarChart2,
  BookOpenText,
  User,
} from 'lucide-react-native';

// Your screen imports here...
import DashboardScreen from '../screens/Dashboard';
import ConsultationFormScreen from '../screens/Consultation/ConsultationFormScreen';
import EvaluationFormScreen from '../screens/Evaluation/EvaluationFormScreen';
import ProfileScreen from '../screens/Profile';
import EvaluationListScreen from '../screens/Evaluation/EvaluationListScreen';
import EvaluationDetailScreen from '../screens/Evaluation/EvaluationDetailScreen';
import ConsultationListScreen from '../screens/Consultation/ConsultationListScreen';
import ConsultationDetailScreen from '../screens/Consultation/ConsultationDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarItemStyle: styles.tabItem,
      headerShown: false,
      tabBarActiveTintColor: '#2563EB',
      tabBarInactiveTintColor: '#64748B',
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Home color={color} size={focused ? 22 : 20} />
        ),
      }}
    />
    <Tab.Screen
      name="Consultation"
      component={ConsultationFormScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <BookOpenText color={color} size={focused ? 22 : 20} />
        ),
      }}
    />
    <Tab.Screen
      name="Evaluation"
      component={EvaluationFormScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <ClipboardList color={color} size={focused ? 22 : 20} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <User color={color} size={focused ? 22 : 20} />
        ),
      }}
    />
  </Tab.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{ headerShown: false }}
    />
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
    <Stack.Screen
      name="ConsultationList"
      component={ConsultationListScreen}
      options={{ title: 'My Consultations' }}
    />
    <Stack.Screen
      name="ConsultationDetail"
      component={ConsultationDetailScreen}
      options={{ title: 'Consultation Detail' }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: -5,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 20,
    backgroundColor: 'white',
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: '#ffffffff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  tabItem: {
    paddingVertical: 8,
  },
});

export default RootNavigator;
