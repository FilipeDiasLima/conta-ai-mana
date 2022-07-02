import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import ListButton from '../../components/ListButton'
import { ScreenNameNavigation } from '../../types/navigation';
import ISTSData from '../../utils/ists.json'
import { ComponentsContext } from '../../context/ComponentsContext';

import { Container, Header, TitlePage, NormalText, ItemList } from './styles'
import { TouchableOpacity } from 'react-native';

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
  const { onLayout } = useContext(ComponentsContext)
  const { navigate, goBack } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();

  function handleGoBack() {
    goBack()
  }

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
        <TouchableOpacity onPress={handleGoBack} style={{ padding: 10 }}>
          <AntDesign name="left" size={16} color="#FF429C" />
        </TouchableOpacity>
        <TitlePage>ISTs</TitlePage>
        <TouchableOpacity disabled style={{ padding: 10 }}>
          <AntDesign name="left" size={16} color="transparent" />
        </TouchableOpacity>
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