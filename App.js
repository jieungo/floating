import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootStack from './src/RootStack';

const App = () => {
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
