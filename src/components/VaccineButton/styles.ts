import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 7%;
  width: 100%;
  height: ${RFPercentage(11)}px;
  border-radius: 20px;
  margin-bottom: ${RFPercentage(3)}px;
  background-color: #FFF;
`

export const ButtonImage = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`

export const Title = styled.Text`
  color: #202020;
  font-size: ${RFValue(18)}px;
  font-family: Poppins_400Regular;
  padding-left: 10px;
`
