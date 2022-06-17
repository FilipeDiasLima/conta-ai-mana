import React from 'react'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { ButtonImage, Container, Title } from './styles';
import ic_vac from '../../assets/ic_vac.png'

interface Props extends RectButtonProps {
  title: string,
  type: number,
}

export default function VaccineButton({ title, type, ...rest }: Props) {

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <ButtonImage source={ic_vac} />
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  )
}