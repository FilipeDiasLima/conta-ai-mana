import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'

import AppStack from './src/routes'
import { ComponentsProvider } from './src/context/ComponentsContext'

export default function App() {

  return (
    <ComponentsProvider>
      <View style={{ width: '100%', backgroundColor: '#FF4EA2', height: Constants.statusBarHeight + 20 }}></View>
      <AppStack />
      <StatusBar style="light" />
    </ComponentsProvider>
  );
}