import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
  justify-content: space-around;
  padding: 7%;
  width: ${RFPercentage(22)}px;
  height: ${RFPercentage(27)}px;
  border-radius: 20px;
  margin-bottom: ${RFPercentage(2)}px;
`

export const ButtonImage = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: ${RFValue(20)}px;
  font-family: Poppins_700Bold;
`

export const Description = styled.Text`
  color: #FFF;
  font-size: ${RFValue(10)}px;
  font-family: Poppins_400Regular;
`