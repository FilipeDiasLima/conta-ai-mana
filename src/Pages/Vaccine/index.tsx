import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import VaccineButton from '../../components/VaccineButton';
import { ScreenNameNavigation } from '../../types/navigation';
import { Container, Header, TitlePage, ItemList, NormalText } from './styles'
import { ComponentsContext } from '../../context/ComponentsContext';
import { TouchableOpacity } from 'react-native';

export default function Vaccine() {
  const { onLayout } = useContext(ComponentsContext)
  const { navigate, goBack } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();

  function handleChooseVaccine(days: number, title: string, key: string) {
    navigate('OpenVaccine' as never, { days, title, key } as never);
  }

  function handleGoBack() {
    goBack()
  }

  return (
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
        <TitlePage>Cartão de Vacinação</TitlePage>
        <TouchableOpacity disabled style={{ padding: 10 }}>
          <AntDesign name="left" size={16} color="transparent" />
        </TouchableOpacity>
      </Header>
      <NormalText>Escolha o tema desejado:</NormalText>
      <ItemList>
        <VaccineButton
          title='Tríplice Viral'
          onPress={() => handleChooseVaccine(30, 'Tríplice Viral', 'tripliceviral')}
        />
        <VaccineButton
          title='Hepatite A'
          onPress={() => handleChooseVaccine(180, 'Hepatite A', 'hepatitea')}
        />
        <VaccineButton
          title='Hepatite B'
          onPress={() => handleChooseVaccine(180, 'Hepatite B', 'hepatiteb')}
        />
        <VaccineButton
          title='HPV'
          onPress={() => handleChooseVaccine(30, 'HPV', 'hpv')}
        />
        <VaccineButton
          title='Catapora'
          onPress={() => handleChooseVaccine(60, 'Catapora', 'catapora')}
        />
        <VaccineButton
          title='Influenza'
          onPress={() => handleChooseVaccine(365, 'Influenza', 'influenza')}
        />
        <VaccineButton
          title='Meningocícias                  Conjugadas'
          onPress={() => handleChooseVaccine(1825, 'Meningocícias Conjugadas', 'meningociciasconjugadas')}
        />
        <VaccineButton
          title='Meningocícias B'
          onPress={() => handleChooseVaccine(60, 'Meningocícias B', 'meningociciasb')}
        />
        <VaccineButton
          title='Febre Amarela'
          onPress={() => handleChooseVaccine(0, 'Febre Amarela', 'febreamarela')}
        />
        <VaccineButton
          title='Dengue'
          onPress={() => handleChooseVaccine(30, 'Dengue', 'dengue')}
        />
      </ItemList>
    </Container>
  )
}