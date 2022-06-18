import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ListButton from '../../components/ListButton'
import { ScreenNameNavigation } from '../../types/navigation';
import { Container, Header, TitlePage, NormalText, ItemList } from './styles'
import { TipsData } from '../../utils/tips'
import { ComponentsContext } from '../../context/ComponentsContext';

interface DataTipsProps {
  item: ItemProps
}

interface ItemProps {
  id: number,
  title: string,
  description: string,
  image: string,
}

export default function Tips() {
  const { onLayout } = useContext(ComponentsContext)
  const { navigate } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();

  function handleChooseTip(type: number) {
    navigate('OpenTip' as never, { type } as never);
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
        <TitlePage>Recomendações:</TitlePage>
      </Header>
      <NormalText>Escolha o tema desejado:</NormalText>
      <ItemList
        data={TipsData}
        keyExtractor={item => item.id}
        renderItem={(data: DataTipsProps) => (
          <ListButton
            key={data.item.id}
            title={data.item.title}
            type={data.item.id}
            image={'lamp'}
            onPress={() => handleChooseTip(data.item.id)}
          />
        )}
      />
    </Container>
  )
}