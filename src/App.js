import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import Toast from 'react-native-toast-message';
import { toastConfig } from './components/common/Toast';
import BottomNav from './navigations/BottomNav';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <NavigationContainer>
          <BottomNav />
        </NavigationContainer>
      </RecoilRoot>
      <Toast config={toastConfig} />
  </>
  );
};

export default App;
