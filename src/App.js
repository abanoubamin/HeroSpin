import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
