import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ListButton from '../../components/ListButton'
import { ScreenNameNavigation } from '../../types/navigation';
import ISTSData from '../../utils/ists.json'
import { ComponentsContext } from '../../context/ComponentsContext';

import { Container, Header, TitlePage, NormalText, ItemList } from './styles'

interface DataISTSProps {
  item: ItemProps
}

interface ItemProps {
  num: number
  nome: string
  descricao?: string
  icone: string
  video: string
}

export default function ISTS() {
  const { navigate } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();
  const { onLayout } = useContext(ComponentsContext)

  function handleChooseVideo(type: number) {
    navigate('OpenVideo' as never, { type } as never);
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
        <TitlePage>ISTs:</TitlePage>
      </Header>
      <NormalText>Escolha o tema desejado:</NormalText>
      <ItemList
        data={ISTSData}
        keyExtractor={(item: any) => item.num}
        renderItem={(data: DataISTSProps) => (
          <ListButton
            key={data.item.num}
            title={data.item.nome}
            image={data.item.icone}
            onPress={() => handleChooseVideo(data.item.num)}
          />
        )}
      />
    </Container>
  )
}