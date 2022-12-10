import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function RecordScreen() {
  return (
    <View style={styles.wrapper}>
      <Text>record</Text>
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

export default RecordScreen;
