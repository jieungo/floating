import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import React from 'react';
import WriteScreen from './WriteScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppleHealthKit, {HealthValue} from 'react-native-health';
import {setDistance} from '../slices/distanceSlice';
import {useDispatch} from 'react-redux';
const Stack = createNativeStackNavigator();

function RootStack() {
  const dispatch = useDispatch();
  /* Permission options */

  const permissions = {
    permissions: {
      read: [AppleHealthKit.Constants.Permissions.DistanceSwimming],
      write: [AppleHealthKit.Constants.Permissions.DistanceSwimming],
    },
  };

  console.log('initializing health kit');
  console.log(AppleHealthKit.Constants.Activities.Swimming);
  AppleHealthKit.initHealthKit(permissions, (error: string) => {
    /* Called after we receive a response from the system */

    if (error) {
      console.log('[ERROR] Cannot grant permissions!');
      console.log(error);
    }

    /* Can now read or write to HealthKit */

    let options = {
      date: new Date().toISOString(),
    };

    AppleHealthKit.getDistanceSwimming(options, (err: Object, results: HealthValue) => {
      if (err) {
        return;
      }
      dispatch(setDistance(results.value));
      console.log(results.value);
    });
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Write" component={WriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
