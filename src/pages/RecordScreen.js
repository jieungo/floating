import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

function RecordScreen() {
  const distanceSwimming = useSelector(state => state.distance.value);
  return (
    <View style={styles.wrapper}>
      <Text>record</Text>
      <Text> {distanceSwimming} meter</Text>
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
