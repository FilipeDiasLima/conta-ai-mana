import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

import {
  Container,
  Header,
  ScrollView,
  TitlePage,
  Content,
  NormalText,
  Subtitles,
  Item,
  Color
} from "./styles";

export default function CalendarMestrual() {
  const dataKeyCalendar = `@contaaimana:calendar`
  const dataKeyDate = `@contaaimana:date`

  const [period, setPeriod] = useState({})

  async function handleMestrualPeriod(date: DateData) {
    const startingDay = date.dateString

    const dateSplit = startingDay.split('-').join('/')
    const today = new Date(dateSplit);
    const tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
    const secondDay = moment(tomorrow).format('YYYY-MM-DD')

    tomorrow.setDate(today.getDate() + 2);
    const thirdDay = moment(tomorrow).format('YYYY-MM-DD')

    tomorrow.setDate(today.getDate() + 3);
    const endingDay = moment(tomorrow).format('YYYY-MM-DD')


    const period = {
      [startingDay]: { startingDay: true, color: '#EC1432' },
      [secondDay]: { disable: true, selected: true, color: '#FA5A4F' },
      [thirdDay]: { disable: true, selected: true, color: '#FA5A4F' },
      [endingDay]: { endingDay: true, color: '#FA5A4F' }
    }

    try {
      const dates = await AsyncStorage.getItem(dataKeyDate)
      console.log('1- ', dates)
      if (dates) await AsyncStorage.setItem(dataKeyDate, JSON.stringify(JSON.parse(dates!) + ', ' + startingDay))
      else await AsyncStorage.setItem(dataKeyDate, JSON.stringify(startingDay))

      await AsyncStorage.setItem(dataKeyCalendar + `${startingDay}`, JSON.stringify(period))
      const data = await AsyncStorage.getItem(dataKeyCalendar + `${startingDay}`)
      setPeriod(JSON.parse(data!))
    } catch (err) {
      console.log(err)
      Alert.alert('Não foi possível salvar as informações')
    }
  }

  async function loadData() {
    const dates = await AsyncStorage.getItem(dataKeyDate)
    if (dates) {
      const datesArr = JSON.parse(dates).split(', ')
      datesArr.map(async (date: string) => {
        const data = await AsyncStorage.getItem(dataKeyCalendar + date)
        const allData = Object.assign(JSON.parse(data!), period)
        setPeriod(allData)
      })
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <ScrollView>
      <Container>
        <Header>
          <TitlePage>Meu Ciclo:</TitlePage>
        </Header>
        <Content>
          <Calendar
            style={{ width: 330, borderRadius: 20, overflow: 'hidden', padding: 20 }}
            onDayPress={date => handleMestrualPeriod(date)}
            markingType={'period'}
            markedDates={period}
          />
          <Subtitles>
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
            <Item>
              <Color
                color='#000'
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
          </Subtitles>
        </Content>
      </Container>
    </ScrollView>
  )
} 