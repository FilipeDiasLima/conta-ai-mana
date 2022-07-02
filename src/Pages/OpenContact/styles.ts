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
  padding-bottom: ${RFPercentage(5)}px;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  background: #FFF;
  height: ${RFPercentage(12)}px;
  padding: ${RFPercentage(3)}px;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

export const TitlePage = styled.Text`
  color: #FF429C;
  font-size: ${RFValue(22)}px;
  font-family: Poppins_700Bold;
`

export const BoldText = styled.Text`
  color: #222;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_700Bold;
  padding-top: ${RFPercentage(5)}px;
  align-self: flex-start;
`

export const NormalText = styled.Text`
  color: #717171;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_400Regular;
  padding-top: ${RFPercentage(1)}px;
  align-self: flex-start;
  margin-left: 10px;
`

export const Content = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${RFPercentage(3)}px;
`

export const CardContact = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`