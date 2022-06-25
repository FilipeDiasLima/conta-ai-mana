import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

interface ColorBackgroundProps {
  color: string
}


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
  background: #FFF;
  height: ${RFPercentage(12)}px;
  padding-left: ${RFPercentage(4)}px;
  align-items: flex-start;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
  padding: ${RFPercentage(3)}px;
  width: 100%;
`

export const Subtitles = styled.View`
  width: 100%;
  flex-direction: column;
  align-items:  flex-start;
  justify-content: center;
  padding: ${RFPercentage(3)}px; 
`

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Color = styled.View<ColorBackgroundProps>`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: ${props => props.color};
`
