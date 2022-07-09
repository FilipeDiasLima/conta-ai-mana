import React, { useContext, useEffect, useState } from "react";
import { ComponentsContext } from "../../context/ComponentsContext";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ic_new_toolbar from '../../assets/ic_new_toolbar.png'
import ic_new_bgb from '../../assets/ic_new_bgb.png'
import loadingImage from '../../assets/splash.png'

import {
  ScrollView,
  Container,
  Header,
  Image,
  ImageHeader,
  NormalText,
  Button,
  ButtonText
} from './styles'
import { View } from "react-native";

export default function Welcome() {
  const { onLayout } = useContext(ComponentsContext)

  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(true)

  function closeLoadingScreen() {
    setLoading(false)
  }

  useEffect(() => {
    const interval = setInterval((closeLoadingScreen), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {loading ? (
        <View style={{ width: '100%', flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: '#FF4EA2' }}>
          <Image source={loadingImage} style={{ resizeMode: 'contain', width: '100%' }} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container onLayout={onLayout}>
            <Header>
              <ImageHeader source={ic_new_toolbar} />
            </Header>
            <Image source={ic_new_bgb} />
            <NormalText>
              Seja bem-vinda! Entre agora no nosso app para ter acesso a diversas informações
              importantes sobre saúde para adolescentes.
            </NormalText>
            <GestureHandlerRootView style={{ alignSelf: 'flex-end' }}>
              <Button onPress={() => navigate('Login' as never)}>
                <ButtonText>
                  Entrar no app
                </ButtonText>
              </Button>
            </GestureHandlerRootView>
          </Container>
        </ScrollView>
      )
      }
    </>
  )
}