import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AI from '../screens/AI';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RandomStack } from './StackNav';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="home"
        component={RandomStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <FontAwesome5 name="dice" size={24} />,
        }}
      />

      <Tab.Screen
        name="AI"
        component={AI}
        options={{
          tabBarLabel: 'AI',
          tabBarIcon: () => <FontAwesome5 name="robot" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNav;
