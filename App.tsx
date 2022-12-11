import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootStack from './src/pages/RootStack';
import AppleHealthKit, {HealthValue, HealthKitPermissions} from 'react-native-health';

const App = () => {
  /* Permission options */
  const permissions = {
    permissions: {
      read: [AppleHealthKit.Constants.Permissions.DistanceSwimming],
      write: [AppleHealthKit.Constants.Permissions.DistanceSwimming],
    },
  } as HealthKitPermissions;

  console.log('initializing health kit');
  console.log(AppleHealthKit.Constants.Activities.Swimming);
  AppleHealthKit.initHealthKit(permissions, (error: string) => {
    /* Called after we receive a response from the system */

    if (error) {
      console.log('[ERROR] Cannot grant permissions!');
      // console.log(permissions);
    }

    /* Can now read or write to HealthKit */

    let options = {
      startDate: new Date(2016, 4, 27).toISOString(), // required
      endDate: new Date().toISOString(), // optional; default now
      ascending: false, // optional; default false
      limit: 10, // optional; default no limit
      period: 60, // time interval in minutes optional: default 60
      includeManuallyAdded: false, // optional: default false
      // unit: 'meter', // optional; default meter
    };

    AppleHealthKit.getDailyDistanceSwimmingSamples(
      options,
      (err: Object, results: Array<HealthValue>) => {
        if (err) {
          return;
        }
        console.log(results);
        console.log('tstt');
      },
    );
  });
  return (
    <SafeAreaView style={styles.box}>
      <RootStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});

export default App;
