import { useState, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homebtn from '../../assets/homebtn.png';
import filter from '../../assets/filter.png';
import { RandomStack } from './StackNav';
import Filter from '../components/home/Filter';
import { Image, StyleSheet } from 'react-native';
import logo from '../../assets/logo.jpg';
import { useNavigation } from '@react-navigation/native';
import { HomeLogoBtn } from '../constants/Color';
import wish2 from '../../assets/wish2.png';
import wish3 from '../../assets/wish3.png';
import wish from '../../assets/wish.png';
import wish1 from '../../assets/wish1.png';
import Group from '../../assets/Group.png';
import random from '../../assets/random.png';
import wish5 from '../../assets/wish5.png';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const navigation = useNavigation();
  const handleFilterButton = useCallback(() => {
    setFilterModalVisible(true);
  }, []);

  const handleCloseFilter = useCallback(() => {
    setFilterModalVisible(false);
  }, []);

  const handleApplyFilter = useCallback(
    (selected) => {
      handleCloseFilter();
    },
    [handleCloseFilter]
  );

  return (
    <>
      <Tab.Navigator
        initialRouteName={'home'}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="wish"
          component={RandomStack}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: () => {
              return <Image source={wish} style={styles.image} />;
            },
          }}
          listeners={{
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate('WishList');
            },
          }}
        />

        <Tab.Screen
          name="home"
          component={RandomStack}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: () => {
              return <Image source={wish5} style={styles.image} />;
            },
          }}
        />

        <Tab.Screen
          name="Filter"
          component={RandomStack}
          listeners={{
            tabPress: (event) => {
              event.preventDefault();
              handleFilterButton();
            },
          }}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: () => {
              return <Image source={filter} style={styles.image} />;
            },
          }}
        />
      </Tab.Navigator>
      <Filter
        visible={isFilterModalVisible}
        onRequestClose={handleCloseFilter}
        onApply={handleApplyFilter}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: { width: 28, height: 28, marginTop: 10 },
  homeimage: {
    width: 60,
    height: 60,
    marginTop: 10,
    padding: 28,
    marginBottom: 20,
  },
});

export default BottomNav;
