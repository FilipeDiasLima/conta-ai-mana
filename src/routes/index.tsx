import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Home from '../Pages/Home';
import ISTS from '../Pages/ISTS';
import OpenVideo from '../Pages/OpenVideo';
import Tips from '../Pages/Tips';
import OpenTip from '../Pages/OpenTip';
import Vaccine from '../Pages/Vaccine';
import OpenVaccine from '../Pages/OpenVaccine';
import IMC from '../Pages/IMC';
import Puberty from '../Pages/Puberty';
import Welcome from '../Pages/Welcome';
import Login from '../Pages/Login';
import Asks from '../Pages/Asks';
import Map from '../Pages/Map';
import OpenContact from '../Pages/OpenContact';
import Calendar from '../Pages/Calendar';

const { Navigator, Screen } = createNativeStackNavigator()

interface DataUser {
  name: string
  birthday: string
}

export default function AppStack() {
  const dataKey = `@contaaimana:loginuser`
  const [isLogged, setIsLogged] = useState<boolean>(false)

  async function loadData() {
    const data = await AsyncStorage.getItem(dataKey)
    const dataUser: DataUser = JSON.parse(data!)
    if (dataUser) setIsLogged(true)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {!isLogged && <Screen name='Welcome' component={Welcome} />}
        <Screen name='Home' component={Home} />
        <Screen name='Login' component={Login} />
        <Screen name='ISTS' component={ISTS} />
        <Screen name='Tips' component={Tips} />
        <Screen name='Vaccine' component={Vaccine} />
        <Screen name='IMC' component={IMC} />
        <Screen name='Puberty' component={Puberty} />
        <Screen name='Asks' component={Asks} />
        <Screen name='Map' component={Map} />
        <Screen name='OpenVideo' component={OpenVideo} />
        <Screen name='OpenTip' component={OpenTip} />
        <Screen name='OpenVaccine' component={OpenVaccine} />
        <Screen name='OpenContact' component={OpenContact} />
        <Screen name='Calendar' component={Calendar} />
      </Navigator>
    </NavigationContainer>
  )
}