import React from 'react'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { Container, ButtonText } from './styles'

interface MenuButtonProps extends RectButtonProps {
  type: number
  title: string;
}

export default function MenuMiniButton({ type, title, ...rest }: MenuButtonProps) {

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        {type === 1 && <FontAwesome name="circle" size={22} color='#FF72B5' />}
        {type === 2 && <MaterialCommunityIcons name="frequently-asked-questions" size={22} color='#FF72B5' />}
        {type === 3 && <FontAwesome5 name="phone" size={22} color='#FF72B5' />}
        {type === 4 && <Entypo name="spotify" size={22} color='#1ED760' />}
        {type === 5 && <Ionicons name="exit" size={22} color='#FF72B5' />}
        <ButtonText>{title}</ButtonText>
      </Container>
    </GestureHandlerRootView>
  )
}