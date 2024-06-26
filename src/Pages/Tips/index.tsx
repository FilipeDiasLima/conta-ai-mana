import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import ListButton from '../../components/ListButton'
import { ScreenNameNavigation } from '../../types/navigation';
import { Container, Header, TitlePage, NormalText, ItemList } from './styles'
import TipsData from '../../utils/tips.json'
import { ComponentsContext } from '../../context/ComponentsContext';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';

interface DataTipsProps {
  item: ItemProps
}

interface ItemProps {
  num: number,
  nome: string,
  descricao: string,
  image: string,
}

export default function Tips() {
  const { onLayout } = useContext(ComponentsContext)
  const { navigate, goBack } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();

  function handleGoBack() {
    goBack()
  }

  function handleChooseTip(type: number) {
    navigate('OpenTip' as never, { type } as never);
  }

  async function handleOpenLink() {
    await WebBrowser.openBrowserAsync('https://sogirgs.org.br/sessao/protocolos-febrasgo/');
  }

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
          <AntDesign name="left" size={16} color="#FF429C" />
        </TouchableOpacity>
        <TitlePage>Recomendações</TitlePage>
        <TouchableOpacity disabled style={{ padding: 10 }}>
          <AntDesign name="left" size={16} color="transparent" />
        </TouchableOpacity>
      </Header>
      <NormalText>Escolha o tema desejado:</NormalText>
      <ItemList
        data={TipsData}
        keyExtractor={(item: any) => item.num}
        renderItem={(data: DataTipsProps) => (
          <ListButton
            key={data.item.num}
            title={data.item.nome}
            image={'lamp'}
            onPress={() => handleChooseTip(data.item.num)}
          />
        )}
      />
      <NormalText style={{ paddingTop: '4%' }}>
        Disponível em: Protocolo Febrasgo (2020) -
        <NormalText style={{ color: '#2dabff' }} onPress={handleOpenLink}>
          https://sogirgs.org.br/sessao/protocolos-febrasgo/
        </NormalText>
      </NormalText>
    </Container>
  )
}