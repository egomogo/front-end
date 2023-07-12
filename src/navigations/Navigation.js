import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomNav'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default Navigation;
