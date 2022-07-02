import React, { useContext, useEffect, useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import ISTSData from '../../utils/ists.json'

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
    const item = ISTSData.find(item => item.num === route.params?.type)
    setTitle(item?.nome || '')
    setUri(item?.video || '')
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
          <AntDesign name="left" size={16} color="white" />
        </TouchableOpacity>
        <TitlePage>{title}</TitlePage>
        <TouchableOpacity disabled style={{ padding: 10 }}>
          <AntDesign name="left" size={16} color="transparent" />
        </TouchableOpacity>
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