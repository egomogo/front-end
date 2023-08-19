import { useState, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homebtn from '../../assets/homebtn.jpg';
import filter from '../../assets/filter.png';
import { RandomStack } from './StackNav';
import Filter from '../components/home/Filter';
import { Image, StyleSheet } from 'react-native';
import logo from '../../assets/logo.jpg';
import { useNavigation } from '@react-navigation/native';

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
          name="home"
          component={RandomStack}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: () => {
              return <Image source={homebtn} style={styles.homeimage} />;
            },
          }}
        />
        <Tab.Screen
                  name="wish"
                  component={RandomStack}
                  listeners={{
                    tabPress: (event) => {
                      event.preventDefault();
                      navigation.navigate('WishList'); // WishList로 이동합니다.
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
            tabBarLabel: 'Filter',
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
  image: { width: 42, height: 42 },
  homeimage:{ width: 42, height: 42, marginTop:10 },
});

export default BottomNav;
