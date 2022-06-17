import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export const Container = styled(RectButton)`
  flex-direction: row;
  background: #FFF;
  align-items: center;
  justify-content: space-evenly;
  padding: 7%;
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(7)}px;
  border-radius: 15px;
  margin-bottom: ${RFPercentage(2)}px;
`

export const ButtonText = styled.Text`
  color: #202020;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_400Regular;
`