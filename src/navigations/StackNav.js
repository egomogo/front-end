import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import RandomBox from '../screens/RandomBox';
import MoreView from '../screens/MoreView';
import WishList from '../screens/WishList';
import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

const RandomStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Home' || routeName === undefined) {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RandomBox" component={RandomBox} />
      <Stack.Screen name="MoreView" component={MoreView} />
      <Stack.Screen name="WishList" component={WishList} />
    </Stack.Navigator>
  );
};
export { RandomStack };
