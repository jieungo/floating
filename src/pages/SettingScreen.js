import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function SettingScreen() {
  return (
    <View style={styles.wrapper}>
      <Text>setting</Text>
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

export default SettingScreen;
