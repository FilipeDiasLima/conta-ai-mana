import React, { useContext, useState } from 'react'
import { ComponentsContext } from '../../context/ComponentsContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Masks } from 'react-native-mask-input';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native';
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
  ButtonText
} from './styles'

export default function Login() {
  const { onLayout } = useContext(ComponentsContext)
  const { navigate } = useNavigation();

  const dataKey = `@contaaimana:loginuser`

  const [name, setName] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')

  async function handleSaveUser() {
    const userData = {
      name: name || '',
      birthday: birthday || '',
    }

    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(userData))
      navigate('Home' as never)
    } catch (err) {
      console.log(err)
      Alert.alert('Não foi possível salvar as informações')
    }
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
          <TitlePage>Seja Bem-Vinda!</TitlePage>
        </Header>
        <NormalText>
          Antes de começarmos, informe alguns dados para que possamos preparar o aplicativo para deixá-lo mais confortável para você:
        </NormalText>
        <Content>
          <ViewInput>
            <FontAwesome5 name="user-alt" size={24} color="#FF72B5" />
            <Input
              value={name}
              onChangeText={setName}
              placeholder='Nome'
            />
          </ViewInput>
          <ViewInput>
            <FontAwesome5 name="birthday-cake" size={24} color="#FF72B5" />
            <Input
              value={birthday}
              onChangeText={setBirthday}
              placeholder='Data de Nascimento'
              mask={Masks.DATE_DDMMYYYY}
              keyboardType={'numeric'}
            />
          </ViewInput>
          <GestureHandlerRootView>
            <SaveButton onPress={handleSaveUser}>
              <ButtonText>Entrar</ButtonText>
            </SaveButton>
          </GestureHandlerRootView>
        </Content>
      </Container>
    </ScrollView>
  )
}