import React, { useState } from 'react'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { Foundation } from '@expo/vector-icons';

import { ButtonImage, Container, Title, LeftView } from './styles';
import ic_vac from '../../assets/ic_vac.png'

interface Props extends RectButtonProps {
  title: string
}

export default function VaccineButton({ title, ...rest }: Props) {
  const [vaccineOk, setVaccineOk] = useState<boolean>(false)

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <LeftView>
          <ButtonImage source={ic_vac} />
          <Title>{title}</Title>
        </LeftView>
        {/* {vaccineOk ?
          <Foundation name="like" size={30} color="#1ED760" />
          :
          <Foundation name="dislike" size={30} color="#FE3C3C" />
        } */}
      </Container>
    </GestureHandlerRootView>
  )
}