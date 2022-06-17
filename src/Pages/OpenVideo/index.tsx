import React, { useContext, useEffect, useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import { ISTSData } from '../../utils/ists'

import { Container, Header, TitlePage, Player } from "./styles";
import { ComponentsContext } from "../../context/ComponentsContext";

export default function OpenVideo() {
  const { onLayout } = useContext(ComponentsContext)
  const [title, setTitle] = useState('')
  const [uri, setUri] = useState('')

  const route = useRoute()
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }

  useEffect(() => {
    const item = ISTSData.find(item => item.id === route.params?.type)
    setTitle(item?.title || '')
    setUri(item?.uri || '')
  }, [])


  return (
    <Container onLayout={onLayout}>
      <Header>
        <TouchableOpacity onPress={handleGoBack}><AntDesign name="left" size={16} color="white" /></TouchableOpacity>
        <TitlePage>{title}</TitlePage>
        <AntDesign name="left" size={24} color="transparent" />
      </Header>
      <Player style={{ flex: 1 }}>
        <WebView
          style={{ marginTop: (Platform.OS == 'ios') ? 20 : 0, }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${uri}` }}
        />
      </Player>
    </Container>
  )
}