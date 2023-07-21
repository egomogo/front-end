import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigations/Navigation';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
