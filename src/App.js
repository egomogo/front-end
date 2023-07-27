import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import BottomNav from './navigations/BottomNav';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
