import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootStack from './src/pages/RootStack';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.box}>
        <RootStack />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});

export default App;
