import React, { useContext, useState } from 'react'
import { ScrollView } from 'react-native';
import { ComponentsContext } from '../../context/ComponentsContext';
import * as WebBrowser from 'expo-web-browser';

import img1 from '../../assets/cad05.png'
import img2 from '../../assets/cad06.png'
import {
  Container,
  Header,
  TitlePage,
  NormalText,
  Content,
  ImageContent,
} from './styles'

export default function Puberty() {
  const { onLayout } = useContext(ComponentsContext)

  async function handleOpenLink() {
    await WebBrowser.openBrowserAsync('https://sogirgs.org.br/sessao/protocolos-febrasgo/');
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
          <TitlePage>Estou diferente?</TitlePage>
        </Header>
        <Content>
          <NormalText style={{ paddingTop: '4%' }}>O que acontece na puberdade?</NormalText>
          <NormalText style={{ paddingTop: '4%' }}>
            A puberdade é um período que vai dos 10 aos 19 anos e envolve diversas transformações no
            organismo feminino. Então, é NORMAL achar que o corpo está DIFERENTE, tanto no FÍSICO,
            NO HUMOR, NOS SENTIMENTOS, NA AUTO IMAGEM E NO PSICOLÓGICO.
          </NormalText>
          <NormalText style={{ paddingTop: '4%' }}>
            No corpo, nota-se o crescimento em altura e começam a acontecer o crescimento e
            desenvolvimento das MAMAS (Telarca), dos PELOS PUBIANOS (PUBARCA),
            PELOS AXILARES (AXILARCA) E A PRIMEIRA MENSTRUAÇÃO (MENARCA).
          </NormalText>
          <NormalText style={{ paddingTop: '4%' }}>
            Nessa fase, devido ao estímulo hormonal, ocorre aumento da transpiração nas axilas
            e nos pés, e por isso é tão importante fazer uma higiene diária caprichada.
          </NormalText>
          <NormalText style={{ paddingTop: '4%' }}>
            E a pele?
          </NormalText>
          <NormalText style={{ paddingTop: '4%' }}>
            A pele fica mais OLEOSA, e podem surgir as espinhas que tanto incomodam as meninas.
            E aí, a dica também é manter o rosto sempre limpo e higienizado, e
            se necessário usar alguns produtos recomendados pelo especialista (Dermatologista).
          </NormalText>
          <NormalText style={{ paddingTop: '4%' }}>
            É importante conhecer e acompanhar as mudanças do seu corpo, para que se algo estiver diferente,
            procurar um médico para lhe orientar.
          </NormalText>
          <NormalText style={{ paddingTop: '4%' }}>
            A seguir, vamos te mostrar os estágios de desenvolvimento do corpo feminino durante a puberdade.
            Tente identificar em que estágio você está.
          </NormalText>
          <NormalText style={{ paddingTop: '4%' }}>
            Disponível em: Protocolo Febrasgo (2020) -
            <NormalText style={{ color: '#2dabff' }} onPress={handleOpenLink}>
              https://sogirgs.org.br/sessao/protocolos-febrasgo/
            </NormalText>
          </NormalText>
        </Content>
        <ImageContent source={img1} />
        <ImageContent source={img2} />
      </Container>
    </ScrollView>
  )
}