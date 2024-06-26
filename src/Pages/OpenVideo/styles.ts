import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #FFDCED;
`

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  background: #FF4EA2;
  height: ${RFPercentage(12)}px;
  padding: ${RFPercentage(3)}px;
  align-items: center;
  justify-content: space-between;
`

export const TitlePage = styled.Text`
  color: #FFF;
  font-size: ${RFValue(20)}px;
  font-family: Poppins_400Regular;
`

export const Player = styled.View`
  flex: 1;
`