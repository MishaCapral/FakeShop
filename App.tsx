import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Home from './src/components/Home';

const App = () => {
  return (
    <View>
      <Home />
      <Text>Hello world app</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
