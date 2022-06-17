import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { TipsData } from '../../utils/tips'

import { Container, Header, TitlePage, NormalText, Description } from "./styles";
import { ComponentsContext } from "../../context/ComponentsContext";

export default function OpenTip() {
  const { onLayout } = useContext(ComponentsContext)
  const [title, setTitle] = useState('')
  const [descriptions, setDescriptions] = useState('')

  const route = useRoute()
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }

  useEffect(() => {
    const item = TipsData.find(item => item.id === route.params?.type)
    setTitle(item?.title || '')
    setDescriptions(item?.description || '')
  }, [])


  return (
    <Container onLayout={onLayout}>
      <Header>
        <TouchableOpacity onPress={handleGoBack}><AntDesign name="left" size={16} color="white" /></TouchableOpacity>
        <TitlePage>{title}</TitlePage>
        <AntDesign name="left" size={24} color="transparent" />
      </Header>
      <Description>
        <NormalText>{descriptions}</NormalText>
      </Description>
    </Container>
  )
}