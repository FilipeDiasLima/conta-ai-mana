import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import MaskInput from 'react-native-mask-input';
import { RectButton } from 'react-native-gesture-handler';

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
  flex-direction: row;
  background: #FFF;
  height: ${RFPercentage(12)}px;
  padding: ${RFPercentage(3)}px;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

export const ViewInput = styled.View`
  flex-direction: row;
  background: #FFF;
  color: #717171;
  width: ${RFValue(280)}px;
  padding: 0 ${RFPercentage(1.4)}px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 6%;
  justify-content: space-between;
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

export const Input = styled(MaskInput)`
  width: 75%;
  color: #717171;
  padding: ${RFPercentage(2)}px ${RFPercentage(1)}px;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_400Regular;
  margin-left: 2%;
  align-items: baseline;
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

export const SaveInputButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  padding: ${RFPercentage(1.4)}px;
  background: #FF4EA2;
  border-radius: 10px;
`