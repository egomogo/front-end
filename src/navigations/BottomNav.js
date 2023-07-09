import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AI from '../screens/AI';
import AddBtn from '../components/AddBtn';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator initialRouteName={'home'}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="Add" component={AddBtn} />
      <Tab.Screen name="AI" component={AI} />
    </Tab.Navigator>
  );
};
export default BottomNav;
