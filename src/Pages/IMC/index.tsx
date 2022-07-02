import React, { useContext, useState, useEffect } from 'react'
import { ComponentsContext } from '../../context/ComponentsContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  TitlePage,
  NormalText,
  ViewInput,
  Content,
  Input,
  SaveButton,
  ButtonText,
  ResultContent,
  ResultText
} from './styles'


export default function IMC() {
  const { onLayout } = useContext(ComponentsContext)
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack()
  }

  const [weight, setWeight] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [resultMessage, setResultMessage] = useState<string>('')
  const [imc, setImc] = useState<number>(0)

  function verificarIMC() {
    if (imc < 17) {
      setResultMessage("Muito abaixo do peso")
    } else if (imc > 17 && imc <= 18.49) {
      setResultMessage("Abaixo do peso")
    } else if (imc >= 18.5 && imc <= 24.99) {
      setResultMessage("Peso normal")
    } else if (imc >= 25 && imc <= 29.99) {
      setResultMessage("Acima do peso")
    } else if (imc >= 30 && imc <= 34.99) {
      setResultMessage("Obesidade I")
    } else {
      setResultMessage("Obesidade II")
    }
  }

  useEffect(() => {
    verificarIMC()
  }, [imc])

  function handleIMC() {
    const res = Number(height.split('.').join('')) / 100;
    const imcR = String(Number(weight) / (res * res));
    setImc(Number(parseFloat(imcR).toFixed(2)));
    verificarIMC()
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FFDCED' }}>
      <Container onLayout={onLayout}>
        <Header
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}
        >
          <TouchableOpacity onPress={handleGoBack} style={{ padding: 10 }}>
            <AntDesign name="left" size={16} color="#FF429C" />
          </TouchableOpacity>
          <TitlePage>Calcular IMC</TitlePage>
          <TouchableOpacity disabled style={{ padding: 10 }}>
            <AntDesign name="left" size={16} color="transparent" />
          </TouchableOpacity>
        </Header>
        <NormalText>Insira os dados abaixo:</NormalText>
        <Content>
          <ViewInput>
            <FontAwesome5 name="weight-hanging" size={24} color="#FF72B5" />
            <Input
              value={weight}
              onChangeText={setWeight}
              placeholder='Peso'
              maxLength={3}
              keyboardType={'numeric'}
            />
          </ViewInput>
          <ViewInput>
            <MaterialCommunityIcons name="human-male-height" size={24} color="#FF72B5" />
            <Input
              value={height}
              onChangeText={setHeight}
              placeholder='Altura'
              maxLength={4}
              mask={[/\d/, '.', /\d/, /\d/]}
              keyboardType={'numeric'}
            />
          </ViewInput>
          <GestureHandlerRootView>
            <SaveButton onPress={handleIMC}>
              <ButtonText>Calcular IMC</ButtonText>
            </SaveButton>
          </GestureHandlerRootView>
          {imc !== 0 &&
            <ResultContent>
              <ResultText>Seu IMC é:</ResultText>
              <ResultText style={{ fontFamily: 'Poppins_700Bold', fontSize: 20 }}>{imc}</ResultText>
              <ResultText>
                {resultMessage}
              </ResultText>
            </ResultContent>
          }
        </Content>
      </Container>
    </ScrollView>
  )
}