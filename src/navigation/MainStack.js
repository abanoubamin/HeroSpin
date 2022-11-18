import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Heroes from '../screens/Heroes';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Heroes" component={Heroes} />
    </Stack.Navigator>
  );
}
