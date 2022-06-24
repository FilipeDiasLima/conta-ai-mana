import React from 'react'
import { Calendar, CalendarList } from 'react-native-calendars';

import { Container, Header, ScrollView, TitlePage, Content } from "./styles";

export default function CalendarMestrual() {
  return (
    <ScrollView>
      <Container>
        <Header>
          <TitlePage>Meu Ciclo:</TitlePage>
        </Header>
        <Content>
          <Calendar
            style={{ width: 330, borderRadius: 20, overflow: 'hidden', padding: 20 }}
            // Collection of dates that have to be marked. Default = {}

            markedDates={{
              '2022-06-16': { selected: true, marked: true, selectedColor: 'blue' },
              '2022-06-17': { marked: true },
              '2022-06-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
              '2022-06-19': { disabled: true, disableTouchEvent: true }
            }}
          />
        </Content>
      </Container>
    </ScrollView>
  )
} 