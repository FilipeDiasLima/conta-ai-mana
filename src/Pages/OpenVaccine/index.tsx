import React, { useContext, useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Masks } from 'react-native-mask-input';
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment';

import { ComponentsContext } from '../../context/ComponentsContext';

import {
  ScrollView,
  Container,
  Header,
  TitlePage,
  NormalText,
  Content,
  DoseCard,
  HeaderTitle,
  CardTitle,
  DateInput,
  LineInput,
  SaveButton,
  ButtonText
} from './styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface DoseProps {
  firstDate: string
  secondDate: string
  thirdDate: string
}

export default function OpenVaccine() {
  moment.locale('pt-BR');
  const route = useRoute()
  const { onLayout } = useContext(ComponentsContext)

  const titlePage = route.params!.title
  const daysVaccine = route.params!.days
  const keyVaccine = route.params!.key
  const dataKey = `@contaaimana:doses${route.params!.key}`

  const [message, setMessage] = useState<string>('Você deve tomar a primeira dose com urgência ou informar ao aplicativo que já tomou')
  const [inputSelected, setInputSelected] = useState<boolean>(false)
  const [firstDate, setFirstDate] = useState<string>('')
  const [secondDate, setSecondDate] = useState<string>('')
  const [thirdDate, setThirdDate] = useState<string>('')
  const [intervalDays, setIntervalDays] = useState<number>(daysVaccine)

  function parseMessage() {
    if (intervalDays === 0) {
      setMessage(`Você está com a vacinação completa`)
    } else {
      const dateRevert = firstDate.split('/').reverse().join('/')

      const today = new Date(dateRevert);
      const tomorrow = new Date();

      tomorrow.setDate(today.getDate() + intervalDays);

      const dateParse = moment(tomorrow).format('DD/MM/YYYY')

      setMessage(`Você deve tomar a próxima dose em ${String(dateParse)}`)
    }
  }

  function doseInterval() {
    if (firstDate) {
      parseMessage()
      Alert.alert(message)
    }
    if (!firstDate) {
      setMessage('Você deve tomar a primeira dose com urgência ou informar ao aplicativo que já tomou')
    }
  }

  function handleSelectInput() {
    setInputSelected(!inputSelected)
  }

  async function handleSaveDose() {
    const doses = {
      firstDate: firstDate || '',
      secondDate: secondDate || '',
      thirdDate: thirdDate || ''
    }

    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(doses))
      doseInterval()
    } catch (err) {
      console.log(err)
      Alert.alert('Não foi possível salvar as informações')
    }
  }

  async function loadData() {
    const data = await AsyncStorage.getItem(dataKey)
    const dateDose: DoseProps = JSON.parse(data!)
    if (dateDose) {
      setFirstDate(dateDose.firstDate)
      setSecondDate(dateDose.secondDate)
      setThirdDate(dateDose.thirdDate)
    }
  }

  useEffect(() => {
    loadData()
    parseMessage()
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          <TitlePage>{titlePage}:</TitlePage>
        </Header>
        <NormalText>{message}</NormalText>
        <Content>
          <DoseCard>
            <HeaderTitle>
              <CardTitle>{intervalDays !== 0 ? intervalDays === 365 ? 'Última Dose' : 'Primeira Dose' : 'Dose Única'}</CardTitle>
            </HeaderTitle>
            <DateInput
              value={firstDate}
              onChangeText={setFirstDate}
              onFocus={handleSelectInput}
              mask={Masks.DATE_DDMMYYYY}
              placeholder='Data de Aplicação'
            />
            <LineInput selected={inputSelected} />
          </DoseCard>
          {intervalDays !== 0 && intervalDays !== 365 &&
            <DoseCard>
              <HeaderTitle>
                <CardTitle>Segunda Dose</CardTitle>
              </HeaderTitle>
              <DateInput
                value={secondDate}
                onChangeText={setSecondDate}
                onFocus={handleSelectInput}
                mask={Masks.DATE_DDMMYYYY}
                placeholder='Data de Aplicação'
              />
              <LineInput selected={inputSelected} />
            </DoseCard>
          }
          {keyVaccine === 'hepatiteb' && (
            <DoseCard>
              <HeaderTitle>
                <CardTitle>Terceira Dose</CardTitle>
              </HeaderTitle>
              <DateInput
                value={thirdDate}
                onChangeText={setThirdDate}
                onFocus={handleSelectInput}
                mask={Masks.DATE_DDMMYYYY}
                placeholder='Data de Aplicação'
              />
              <LineInput selected={inputSelected} />
            </DoseCard>
          )}
          <GestureHandlerRootView>
            <SaveButton onPress={handleSaveDose}>
              <ButtonText>Atualizar</ButtonText>
            </SaveButton>
          </GestureHandlerRootView>
        </Content>
      </Container>
    </ScrollView>
  )
}