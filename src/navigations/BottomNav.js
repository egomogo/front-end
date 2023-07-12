import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AI from '../screens/AI';
import AddBtn from '../components/AddBtn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <FontAwesome5 name="dice" size={24} />,
        }}
      />
      <Tab.Screen name="PlaceholerScreen" component={AddBtn} />
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
