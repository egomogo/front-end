import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav';
import { NavContents } from '../constants/NavContent';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomNav'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomNav" component={BottomNav} />
      {Object.values(NavContents).map((item) => {
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default Navigation;
