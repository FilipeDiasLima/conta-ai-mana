import React from 'react'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { ButtonImage, Container, Title } from './styles';

import helloImage from '../../assets/hello.png'
import hpvImage from '../../assets/hpv.png'
import sifilisImage from '../../assets/sifilis.png'
import gonorreiaImage from '../../assets/gonorreia.png'
import clamydiaImage from '../../assets/clamydia.png'
import herpesImage from '../../assets/herpes.png'
import hivImage from '../../assets/hiv.png'
import lamp from '../../assets/lamp.png'

interface Props extends RectButtonProps {
  title: string
  image: string
}

export default function ListButton({ title, image, ...rest }: Props) {
  let imageSrc
  switch (image) {
    case 'helloImage':
      imageSrc = helloImage;
      break;
    case 'hpvImage':
      imageSrc = hpvImage;
      break;
    case 'sifilisImage':
      imageSrc = sifilisImage;
      break;
    case 'gonorreiaImage':
      imageSrc = gonorreiaImage;
      break;
    case 'clamydiaImage':
      imageSrc = clamydiaImage;
      break;
    case 'herpesImage':
      imageSrc = herpesImage;
      break;
    case 'hivImage':
      imageSrc = hivImage;
      break;
    case 'lamp':
      imageSrc = lamp;
      break;
    default:
      break;
  }
  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <ButtonImage source={imageSrc} />
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  )
}