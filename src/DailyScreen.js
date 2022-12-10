import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function DailyScreen() {
  return (
    <View style={styles.wrapper}>
      <Text>daily</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DailyScreen;
