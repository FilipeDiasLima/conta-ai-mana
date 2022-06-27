import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ButtonMap = styled(RectButton)`
  flex: 1;
`

export const MapImage = styled.Image`
  width: ${RFPercentage(100)}px;
  height: ${RFPercentage(100)}px;
`