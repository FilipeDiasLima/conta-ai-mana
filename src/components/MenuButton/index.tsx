import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, ButtonImage, Title, Description } from './styles'
import ic_icon_ist from '../../assets/ic_icon_ist.png'
import ic_icon_periodical from '../../assets/ic_icon_periodical.png'
import ic_icon_reco from '../../assets/ic_icon_reco.png'
import ic_icon_vac from '../../assets/ic_icon_vac.png'

interface Props extends RectButtonProps {
  backgroundColor: string;
  image: number
  title: string;
  description: string
}

export default function MenuButton({ backgroundColor, image, description, title, ...rest }: Props) {
  let imageSource

  switch (image) {
    case 1:
      imageSource = ic_icon_ist
      break;
    case 2:
      imageSource = ic_icon_periodical
      break;
    case 3:
      imageSource = ic_icon_reco
      break;
    case 4:
      imageSource = ic_icon_vac
      break;
    default:
      break;
  }

  return (
    <GestureHandlerRootView>
      <Container style={{ backgroundColor: backgroundColor }} {...rest}>
        <ButtonImage source={imageSource} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </GestureHandlerRootView>
  )
}