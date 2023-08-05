import React, { useState, useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AI from '../screens/AI';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RandomStack } from './StackNav';
import Filter from '../components/home/Filter';

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
            tabBarIcon: () => <FontAwesome5 name="dice" size={24} />,
          }}
        />

        <Tab.Screen
          name="AI"
          component={AI}
          options={{
            tabBarLabel: 'AI',
            tabBarIcon: () => <FontAwesome5 name="robot" size={24} />,
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
            tabBarIcon: () => <FontAwesome5 name="robot" size={24} />,
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

export default BottomNav;
