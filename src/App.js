import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import MainStackNavigator from './navigation/MainStack';
import {colors, commonStyles} from './theme';

const App = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar
        animated
        translucent
        backgroundColor={colors.transparent}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
