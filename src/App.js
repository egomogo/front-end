import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigations/Navigation';
import { RecoilRoot } from 'recoil';
import Toast from 'react-native-toast-message';
import { toastConfig } from './components/common/Toast';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </RecoilRoot>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
