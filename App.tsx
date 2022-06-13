import { StatusBar } from 'expo-status-bar';
// import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial'

import AppStack from './src/routes'

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Questrial_400Regular
  // });

  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}