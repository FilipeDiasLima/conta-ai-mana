import React, { useContext } from "react";
import { ComponentsContext } from "../../context/ComponentsContext";
import { useNavigation } from "@react-navigation/native";

import ic_new_toolbar from '../../assets/ic_new_toolbar.png'
import ic_new_bgb from '../../assets/ic_new_bgb.png'

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
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Welcome() {
  const { onLayout } = useContext(ComponentsContext)

  const { navigate } = useNavigation();

  return (
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
        <GestureHandlerRootView>
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