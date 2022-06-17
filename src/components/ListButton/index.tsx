import React from 'react'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { ButtonImage, Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string,
  image: string,
  type: number,
}

export default function ListButton({ title, type, image, ...rest }: Props) {

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <ButtonImage source={image} />
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  )
}