import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import MaskInput from 'react-native-mask-input';
import { RectButton } from 'react-native-gesture-handler';

interface LineInputProps {
  selected: boolean
}

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #FFDCED;
`

export const Container = styled.View`
  flex: 1;
  width: 100%;
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

export const NormalText = styled.Text`
  color: #717171;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_400Regular;
  padding-top: ${RFPercentage(5)}px;
  padding-left: ${RFPercentage(3.5)}px;
  align-self: flex-start;
`

export const Content = styled.View`
  flex-direction: column;
  padding: ${RFPercentage(3)}px ${RFPercentage(3.5)}px;
`

export const DoseCard = styled.View`
  flex-direction: column;
  padding: ${RFPercentage(3)}px;
  background-color: #FFF;
  border-radius: 20px;
  margin-bottom: ${RFPercentage(5)}px;
`

export const HeaderTitle = styled.View`
  flex-direction: row;
  padding-bottom: 8%;
`

export const CardTitle = styled.Text`
  color: #222;
  font-size: ${RFValue(16)}px;
  font-family: Poppins_400Regular;
  align-self: flex-start;
`

export const DateInput = styled(MaskInput)`
  color: #717171;
  font-size: ${RFValue(16)}px;
  font-family: Poppins_400Regular;
  align-self: flex-start;
  width: 100%;
`

export const LineInput = styled.View<LineInputProps>`
  width: 100%;
  height: 1px;
  background-color: ${props => props.selected ? "#5BE1D4" : "#717171"};
`

export const SaveButton = styled(RectButton)`
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(8)}px;
  background: #FF4EA2;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-top: 5%;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: ${RFValue(16)}px;
  font-family: Poppins_400Regular;
`