import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import RandomBox from '../screens/RandomBox';

const Stack = createStackNavigator();

const RandomStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RandomBox" component={RandomBox} />
    </Stack.Navigator>
  );
};
export { RandomStack };
