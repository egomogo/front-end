import { View } from 'react-native';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>{state.routes.map(route)}</View>
  );
};
export default TabBar;
