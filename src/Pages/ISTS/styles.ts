import styled from 'styled-components/native';
import { FlatList } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #FFDCED;
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

export const NormalText = styled.Text`
  color: #717171;
  font-size: ${RFValue(14)}px;
  font-family: Poppins_400Regular;
  padding-top: ${RFPercentage(5)}px;
  padding-left: 8%;
  align-self: flex-start;
`

export const ItemList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false
})`
  width: 100%;
  padding: 5% 8%;
`;
