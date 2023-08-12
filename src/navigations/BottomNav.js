import { useState, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AI from '../screens/AI';
import dice from '../../assets/dice.png';
import robot from '../../assets/robot.png';
import filter from '../../assets/filter.png';
import { RandomStack } from './StackNav';
import Filter from '../components/home/Filter';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

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
            tabBarLabel: 'Home',
            tabBarIcon: () => {
              return <Image source={dice} style={styles.image} />;
            },
          }}
        />

        <Tab.Screen
          name="AI"
          component={AI}
          options={{
            tabBarLabel: 'AI',
            tabBarIcon: () => {
              return <Image source={robot} style={styles.image} />;
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
});

export default BottomNav;
