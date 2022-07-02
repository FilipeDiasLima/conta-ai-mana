import React, { useContext, useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import TipsData from '../../utils/tips.json'

import { Container, Header, TitlePage, NormalText, Description, ImageTip } from "./styles";
import { ComponentsContext } from "../../context/ComponentsContext";

export default function OpenTip() {
  const { onLayout } = useContext(ComponentsContext)
  const [title, setTitle] = useState('')
  const [descriptions, setDescriptions] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const route = useRoute()
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }

  useEffect(() => {
    const item = TipsData.find(item => item.num === route.params?.type)
    setTitle(item?.nome || '')
    setDescriptions(item?.descricao || '')
    setImageUrl(item?.image || '')
  }, [])


  return (
    <Container onLayout={onLayout}>
      <Header
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <TouchableOpacity onPress={handleGoBack} style={{ padding: 10 }}>
          <AntDesign name="left" size={16} color="#FFF" />
        </TouchableOpacity>
        <TitlePage>{title}</TitlePage>
        <TouchableOpacity disabled style={{ padding: 10 }}>
          <AntDesign name="left" size={16} color="transparent" />
        </TouchableOpacity>
      </Header>
      <Description>
        <ImageTip
          source={{
            uri: imageUrl
          }}
        />
        <NormalText>{descriptions}</NormalText>
      </Description>
    </Container>
  )
}