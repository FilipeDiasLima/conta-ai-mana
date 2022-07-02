import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { Container, Header, ScrollView, TitlePage, BoldText, NormalText, Content, CardContact } from "./styles";

export default function OpenContact() {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack()
    goBack()
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <TouchableOpacity onPress={handleGoBack} style={{ padding: 10 }}>
            <AntDesign name="left" size={16} color="#FF429C" />
          </TouchableOpacity>
          <TitlePage>Contatos - Manaus</TitlePage>
          <TouchableOpacity disabled style={{ padding: 10 }}>
            <AntDesign name="left" size={16} color="transparent" />
          </TouchableOpacity>
        </Header>
        <Content>
          <BoldText>Aqui você pode encontrar contato de especialistas na sua cidade, caso precise de alguma ajuda:</BoldText>

          <BoldText style={{ color: '#717171' }}>Patrícia Leite Brito:</BoldText>
          <CardContact>
            <MaterialIcons name="email" size={24} color="#FF429C" />
            <NormalText>
              (92) 992410-4045 / 3584-4045
            </NormalText>
          </CardContact>
          <CardContact>
            <FontAwesome5 name="whatsapp" size={24} color="#FF429C" />
            <NormalText>
              pleitebrito@hotmail.com
            </NormalText>
          </CardContact>
          <CardContact>
            <MaterialIcons name="location-pin" size={24} color="#FF429C" />
            <NormalText>
              R. Rio Icá, 40 - Vieiralves
            </NormalText>
          </CardContact>

          <BoldText style={{ color: '#717171' }}>Sigrid Cardoso:</BoldText>
          <CardContact>
            <MaterialIcons name="email" size={24} color="#FF429C" />
            <NormalText>
              (92) 98244-9001 / 3584-9000
            </NormalText>
          </CardContact>
          <CardContact>
            <FontAwesome5 name="whatsapp" size={24} color="#FF429C" />
            <NormalText>
              drasigrid@osite.com.br
            </NormalText>
          </CardContact>
          <CardContact>
            <MaterialIcons name="location-pin" size={24} color="#FF429C" />
            <NormalText>
              R. Acre, 12 - Vieiralves - Ed. Cemom, Salas 807-808
            </NormalText>
          </CardContact>
        </Content>
      </Container>
    </ScrollView>
  )
}
