import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { cycleMestrualDays } from '../../utils/cycleMestrual';

import {
  Container,
  Header,
  ScrollView,
  TitlePage,
  Content,
  NormalText,
  Subtitles,
  Item,
  Color,
  Input,
  ViewInput,
  SaveInputButton
} from "./styles";

export default function CalendarMestrual() {
  const dataKeyCalendar = `@contaaimana:calendar`
  const dataKeyDate = `@contaaimana:date`
  const mestrualCycleKey = `@contaaimana:mestrualcycle`

  const [mestrualCycle, setMestrualCycle] = useState<string>('')
  const [isThereCycle, setIsThereCycle] = useState<boolean>(false)
  const [period, setPeriod] = useState({})

  async function handleMestrualPeriod(date: DateData) {
    const cycleMestrualObj = cycleMestrualDays[mestrualCycle]
    const startingDay = date.dateString
    const isThereKey = await removeKeys(startingDay)
    let newPeriod: any = {}
    if (!isThereKey) {
      const dateSplit = startingDay.split('-').join('/')
      const today = new Date(dateSplit);
      let tomorrow = new Date(today);

      const ovulationDays = calculeFertilePeriod(date)

      for (let i = 0; i < cycleMestrualObj.amountDays; ++i) {
        tomorrow.setDate(today.getDate() + i);
        const aux = moment(tomorrow).format('YYYY-MM-DD')
        if (i === 0) newPeriod[aux] = { startingDay: true, color: '#EC1432' }
        else if (i === cycleMestrualObj.amountDays - 1) newPeriod[aux] = { disabled: true, disableTouchEvent: true, endingDay: true, color: '#FA5A4F' }
        else newPeriod[aux] = { disabled: true, disableTouchEvent: true, selected: true, color: '#FA5A4F' }
        tomorrow = new Date(today);
      }

      tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + Number(mestrualCycle));
      const nextPeriod = moment(tomorrow).format('YYYY-MM-DD')
      newPeriod[nextPeriod] = { startingDay: true, endingDay: true, color: '#F7AEAE' }

      newPeriod = { ...newPeriod, ...ovulationDays }

      try {
        const dates = await AsyncStorage.getItem(dataKeyDate)
        if (dates) await AsyncStorage.setItem(dataKeyDate, JSON.stringify(JSON.parse(dates!) + ', ' + startingDay))
        else await AsyncStorage.setItem(dataKeyDate, JSON.stringify(startingDay))

        await AsyncStorage.setItem(dataKeyCalendar + `${startingDay}`, JSON.stringify(newPeriod))
        const data = await AsyncStorage.getItem(dataKeyCalendar + `${startingDay}`)
        setPeriod({ ...period, ...JSON.parse(data!) })
      } catch (err) {
        console.log(err)
        Alert.alert('Não foi possível salvar as informações')
      }
    } else {
      loadData()
    }
  }

  async function loadData() {
    const dates = await AsyncStorage.getItem(dataKeyDate)
    let aux = {}
    if (dates) {
      const datesArr = JSON.parse(dates).split(', ')
      datesArr.map(async (date: string) => {
        const data = await AsyncStorage.getItem(dataKeyCalendar + date)
        aux = { ...aux, ...JSON.parse(data!) }
        setPeriod(aux)
      })
    }
    setPeriod(aux)
  }

  async function removeKeys(dateParam: string) {
    const dates = await AsyncStorage.getItem(dataKeyDate)
    if (dates) {
      const datesArr = JSON.parse(dates).split(', ')
      const findDate = datesArr.find((date: string) => date === dateParam)
      if (findDate) {
        try {
          const id = datesArr.indexOf(findDate)
          if (id !== -1) {
            datesArr.splice(id, 1)
            const datesString = datesArr.join(', ')
            try {
              await AsyncStorage.setItem(dataKeyDate, JSON.stringify(datesString))
            } catch (err) {
              console.log(err)
            }
          }
          await AsyncStorage.removeItem(dataKeyCalendar + findDate)
        } catch (err) {
          console.log(err)
        }
        return true
      }
      return false
    }
    return false
  }

  async function loadDays() {
    const days = await AsyncStorage.getItem(mestrualCycleKey)
    if (days) {
      setMestrualCycle(JSON.parse(days!))
      setIsThereCycle(true)
    } else {
      setIsThereCycle(false)
    }
  }

  async function saveMestrualCycle() {
    if (Number(mestrualCycle) < 21 || Number(mestrualCycle) > 40) {
      Alert.alert('Coloque um período entre 21 e 40 dias')
    } else {
      try {
        await AsyncStorage.setItem(mestrualCycleKey, JSON.stringify(mestrualCycle))
        setIsThereCycle(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  function calculeFertilePeriod(date: DateData) {
    const cycleMestrualObj = cycleMestrualDays[mestrualCycle]
    const dayCalc = Number(cycleMestrualObj.ovulationInterval)
    const startingDay = date.dateString
    const dateSplit = startingDay.split('-').join('/')
    const day = new Date(dateSplit);
    let nextDay = new Date(day);
    const today = moment(new Date()).format('YYYY-MM-DD')
    let textColor1: any = {}
    let textColor2: any = {}
    let textColor3: any = {}
    let textColor4: any = {}
    let textColor5: any = {}
    let textColor6: any = {}
    let textColor7: any = {}

    nextDay = new Date(day);
    nextDay.setDate(day.getDate() + (dayCalc - 3));
    const fertileDay1 = moment(nextDay).format('YYYY-MM-DD')
    if (today === fertileDay1) textColor1['textColor'] = 'blue'
    else textColor1['textColor'] = '#000'

    nextDay = new Date(day);
    nextDay.setDate(day.getDate() + (dayCalc - 2));
    const fertileDay2 = moment(nextDay).format('YYYY-MM-DD')
    if (today === fertileDay2) textColor2['textColor'] = 'blue'
    else textColor2['textColor'] = '#000'

    nextDay = new Date(day);
    nextDay.setDate(day.getDate() + (dayCalc - 1));
    const fertileDay3 = moment(nextDay).format('YYYY-MM-DD')
    if (today === fertileDay3) textColor3['textColor'] = 'blue'
    else textColor3['textColor'] = '#000'

    nextDay = new Date(day);
    nextDay.setDate(day.getDate() + dayCalc);
    const ovulationDay1 = moment(nextDay).format('YYYY-MM-DD')
    if (today === ovulationDay1) textColor4['textColor'] = 'blue'
    else textColor4['textColor'] = '#FFF'

    nextDay = new Date(day);
    nextDay.setDate(day.getDate() + (dayCalc + 1));
    const ovulationDay2 = moment(nextDay).format('YYYY-MM-DD')
    if (today === ovulationDay2) textColor5['textColor'] = 'blue'
    else textColor5['textColor'] = '#FFF'

    nextDay = new Date(day);
    nextDay.setDate(day.getDate() + (dayCalc + 2));
    const fertileDay6 = moment(nextDay).format('YYYY-MM-DD')
    if (today === fertileDay6) textColor6['textColor'] = 'blue'
    else textColor6['textColor'] = '#000'

    nextDay = new Date(day);
    nextDay.setDate(day.getDate() + (dayCalc + 3));
    const fertileDay7 = moment(nextDay).format('YYYY-MM-DD')
    if (today === fertileDay7) textColor7['textColor'] = 'blue'
    else textColor7['textColor'] = '#000'

    const newPeriod = {
      [fertileDay1]: { ...textColor1, ...{ startingDay: true, color: '#FC90BB', disabled: true, disableTouchEvent: true } },
      [fertileDay2]: { ...textColor2, ...{ selected: true, color: '#FC90BB', disabled: true, disableTouchEvent: true } },
      [fertileDay3]: { ...textColor3, ...{ selected: true, color: '#FC90BB', disabled: true, disableTouchEvent: true } },
      [ovulationDay1]: { ...textColor4, ...{ selected: true, color: '#FC90BB', disabled: true, disableTouchEvent: true, marked: true, dotColor: '#FFF' } },
      [ovulationDay2]: { ...textColor5, ...{ selected: true, color: '#FC90BB', disabled: true, disableTouchEvent: true, marked: true, dotColor: '#FFF' } },
      [fertileDay6]: { ...textColor6, ...{ selected: true, color: '#FC90BB', disabled: true, disableTouchEvent: true } },
      [fertileDay7]: { ...textColor7, ...{ endingDay: true, color: '#FC90BB', disabled: true, disableTouchEvent: true } },
    }

    return newPeriod
  }

  useEffect(() => {
    loadData()
    loadDays()
  }, [])

  useEffect(() => {
    if (Number(mestrualCycle) < 21 || Number(mestrualCycle) > 40) setIsThereCycle(false)
  }, [mestrualCycle])

  return (
    <ScrollView>
      <Container>
        <Header>
          <TitlePage>Meu Ciclo:</TitlePage>
        </Header>
        <Content>
          <NormalText>Quantos dias (em média) dura o seu ciclo menstrual: </NormalText>
          <ViewInput>
            <Input
              value={mestrualCycle}
              onChangeText={setMestrualCycle}
              placeholder='Média de dias'
              mask={[/\d/, /\d/]}
              keyboardType={'numeric'}
            />
            <GestureHandlerRootView>
              <SaveInputButton onPress={saveMestrualCycle}>
                <AntDesign name="arrowright" size={20} color="#FFF" />
              </SaveInputButton>
            </GestureHandlerRootView>
          </ViewInput>
          {isThereCycle && (
            <Calendar
              style={{ width: 330, borderRadius: 20, overflow: 'hidden', padding: 20 }}
              onDayPress={date => handleMestrualPeriod(date)}
              markingType={'period'}
              markedDates={{
                [String(moment(new Date()).format('YYYY-MM-DD'))]: { textColor: 'blue' },
                ...period
              }}
            />
          )}
          <Subtitles>
            <Item>
              <Color
                color='#EC1432'
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
              />
              <NormalText>Início da Mestruação</NormalText>
            </Item>
            <Item>
              <Color
                color='#FA5A4F'
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
              />
              <NormalText>Período de Mestruação</NormalText>
            </Item>
            <Item>
              <Color
                color='#FC90BB'
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
              />
              <NormalText>Período Fértil Previsto</NormalText>
            </Item>
            <Item>
              <Color
                color='#FFF'
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
              />
              <NormalText>Ovulação Prevista</NormalText>
            </Item>
            <Item>
              <Color
                color='#F7AEAE'
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
              />
              <NormalText>Próxima Mestruação Prevista</NormalText>
            </Item>
          </Subtitles>
        </Content>
      </Container>
    </ScrollView>
  )
} 