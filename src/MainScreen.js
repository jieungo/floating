import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedScreen';
import RecordScreen from './RecordScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Record' component={RecordScreen} />
      <Tab.Screen name='Feed' component={FeedScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainScreen;
