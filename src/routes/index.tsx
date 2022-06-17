import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Pages/Home';
import ISTS from '../Pages/ISTS';
import OpenVideo from '../Pages/OpenVideo';
import Tips from '../Pages/Tips';
import OpenTip from '../Pages/OpenTip';

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={Home} />
        <Screen name='ISTS' component={ISTS} />
        <Screen name='Tips' component={Tips} />
        <Screen name='OpenVideo' component={OpenVideo} />
        <Screen name='OpenTip' component={OpenTip} />
      </Navigator>
    </NavigationContainer>
  )
}