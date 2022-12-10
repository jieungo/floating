import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import React from 'react';
import WriteScreen from './WriteScreen';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainScreen} options={{headerShown: false}} />
        <Stack.Screen name='Write' component={WriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
