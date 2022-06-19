import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler';

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #FFDCED;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${RFPercentage(5)}px;
`

export const Header = styled.View`
  width: 100%;
  padding: ${RFPercentage(1)}px ${RFPercentage(1.7)}px;
  justify-content: center;
  align-items: center;
  background: #FF4EA2;
`

export const NormalText = styled.Text`
  color: #202020;
  font-size: ${RFValue(16)}px;
  font-family: Poppins_400Regular;
  padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ;
`

export const ImageHeader = styled.Image`
`

export const Image = styled.Image`
  width: 100%;
  height: ${RFPercentage(60)}px;
`

export const Button = styled(RectButton)`
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(8)}px;
  background: #FF4EA2;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-right: 5%;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: ${RFValue(16)}px;
  font-family: Poppins_400Regular;
`