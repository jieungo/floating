import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DailyScreen from './DailyScreen';
import RecordScreen from './RecordScreen';
import SettingScreen from './SettingScreen';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: '#168EFC', inactiveTintColor: 'gray'}}>
      <Tab.Screen
        name="Record"
        component={RecordScreen}
        options={{
          tabBarLabel: 'Record',
          tabBarIcon: ({color}) => <MCIcons name="swim" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Daily"
        component={DailyScreen}
        options={{
          tabBarLabel: 'Daily',
          tabBarIcon: ({color}) => (
            <MCIcons name="calendar-check-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => <MCIcons name="cog" color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
