import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RandomBox from '../screens/RandomBox';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RandomBox" component={RandomBox} />
    </Stack.Navigator>
  );
};

export default Navigation;

