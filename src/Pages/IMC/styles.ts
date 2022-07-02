import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: ${RFPercentage(1.2)}px;
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

export const ResultText = styled.Text`
  color: #717171;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_400Regular;
`

export const NormalText = styled.Text`
  color: #717171;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_400Regular;
  padding-top: ${RFPercentage(5)}px;
  padding-left: 8%;
  align-self: flex-start;
`

export const Content = styled.View`
  width: 100%;
  padding: 8%;
`

export const ViewInput = styled.View`
  flex-direction: row;
  background: #FFF;
  color: #717171;
  width: 100%;
  padding: 0 ${RFPercentage(1.4)}px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 6%;
`

export const Input = styled(MaskInput)`
  width: 100%;
  color: #717171;
  padding: ${RFPercentage(2)}px ${RFPercentage(1)}px;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_400Regular;
  margin-left: 2%;
  align-items: baseline;
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

export const ResultContent = styled.View`
  width: 100%;
  flex-direction: column;
  background: #FFF;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
  padding: ${RFPercentage(3)}px;
`