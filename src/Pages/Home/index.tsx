import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import MenuButton from '../../components/MenuButton'
import MenuMiniButton from '../../components/MenuMiniButton'
import { ComponentsContext } from '../../context/ComponentsContext'
import { Container, Title, SubTitle, Header, Menu, ScrollView, NormalText } from './styles'

export default function Home() {
  const { onLayout } = useContext(ComponentsContext)

  const { navigate } = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container onLayout={onLayout}>
        <Header>
          <SubTitle>Seja Bem-Vinda</SubTitle>
          <Title>Conta aí, Mana!</Title>
        </Header>
        <Menu>
          <MenuButton
            backgroundColor='#11D111'
            image={1}
            title='ISTs'
            description='Vídeos informativos sobre infecções sexualmente transmissíveis'
            onPress={() => navigate('ISTS' as never)}
          />
          <MenuButton
            backgroundColor='#FF6D6D'
            image={2}
            title='Meu Ciclo'
            description='Veja aqui o calendário do seu ciclo periódico menstrual'
          />
          <MenuButton
            backgroundColor='#D4CD13'
            image={3}
            title='Dicas'
            description='Recomendações sobre diversos temas'
            onPress={() => navigate('Tips' as never)}
          />
          <MenuButton
            backgroundColor='#365BDE'
            image={4}
            title='Vacinas'
            description='Veja seu calendário vacinal completo'
            onPress={() => navigate('Vaccine' as never)}
          />
        </Menu>
        <NormalText>Outras Categorias</NormalText>
        <Menu>
          <MenuMiniButton title='Verificar IMC' type={1} />
          <MenuMiniButton title='Puberdade' type={1} />
          <MenuMiniButton title='Perguntas' type={2} />
          <MenuMiniButton title='Contatos' type={3} />
          <MenuMiniButton title='Spotify' type={4} />
          <MenuMiniButton title='Sair' type={5} />
        </Menu>
      </Container>
    </ScrollView>
  )
}