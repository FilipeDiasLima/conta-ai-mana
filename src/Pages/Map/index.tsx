import { useNavigation } from "@react-navigation/native";
import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import manausMap from '../../assets/manaus.png'
import {
  Container,
  MapImage,
  ButtonMap
} from './styles'

export default function Map() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <GestureHandlerRootView>
        <ButtonMap onPress={() => navigate('OpenContact' as never)}>
          <MapImage source={manausMap} />
        </ButtonMap>
      </GestureHandlerRootView>
    </Container>
  )
} 