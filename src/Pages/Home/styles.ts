import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #FFDCED;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFPercentage(4)}px ${RFPercentage(1.7)}px;
`

export const Header = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Title = styled.Text`
  color: #FF429C;
  font-size: ${RFValue(20)}px;
  font-family: Poppins_700Bold;
`

export const SubTitle = styled.Text`
  color: #878686;
  font-size: ${RFValue(16)}px;
  font-family: Poppins_300Light;
  padding-top: ${RFPercentage(2)}px;
`

export const NormalText = styled.Text`
  color: #202020;
  font-size: ${RFValue(16)}px;
  font-family: Poppins_400Regular;
  padding-top: ${RFPercentage(3)}px;
`

export const Menu = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding-top: ${RFPercentage(5)}px;
`