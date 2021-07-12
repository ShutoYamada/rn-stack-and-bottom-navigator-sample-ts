import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Tab = createBottomTabNavigator();

/** TabNavigator */
const TabNavigator: React.VFC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
