import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import VaccineButton from '../../components/VaccineButton';
import { ScreenNameNavigation } from '../../types/navigation';
import { Container, Header, TitlePage } from './styles'
import { ComponentsContext } from '../../context/ComponentsContext';

export default function Vaccine() {
  const { onLayout } = useContext(ComponentsContext)
  const { navigate } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();

  function handleChooseTip(type: number) {
    navigate('OpenTip' as never, { type } as never);
  }

  return (
    <Container onLayout={onLayout}>
      <Header>
        <TitlePage>Cartão de Vacinação:</TitlePage>
      </Header>
      <VaccineButton
        type={1}
        title='Tríplice Viral'
      />
    </Container>
  )
}