import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListButton from '../../components/ListButton'
import { ScreenNameNavigation } from '../../types/navigation';
import { Container, Header, TitlePage, NormalText, ItemList } from './styles'
import { ISTSData } from '../../utils/ists'
import lamp from '../../assets/lamp.png'
import { ComponentsContext } from '../../context/ComponentsContext';

interface DataISTSProps {
  item: ItemProps
}

interface ItemProps {
  id: number,
  title: string,
  image: string,
  uri: string,
}

export default function ISTS() {
  const { navigate } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();
  const { onLayout } = useContext(ComponentsContext)

  function handleChooseVideo(type: number) {
    navigate('OpenVideo' as never, { type } as never);
  }

  return (
    <Container onLayout={onLayout}>
      <Header>
        <TitlePage>ISTs:</TitlePage>
      </Header>
      <NormalText>Escolha o tema desejado:</NormalText>
      <ItemList
        data={ISTSData}
        keyExtractor={item => item.id}
        renderItem={(data: DataISTSProps) => (
          <ListButton
            key={data.item.id}
            title={data.item.title}
            type={data.item.id}
            image={lamp}
            onPress={() => handleChooseVideo(data.item.id)}
          />
        )}
      />
    </Container>
  )
}