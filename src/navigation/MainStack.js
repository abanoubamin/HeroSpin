import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Heroes from '../screens/Heroes';
import MoviesWheel from '../screens/MoviesWheel';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Heroes" component={Heroes} />
      <Stack.Screen
        name="MoviesWheel"
        component={MoviesWheel}
        options={{title: 'Movies Wheel'}}
      />
    </Stack.Navigator>
  );
}
