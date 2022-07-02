import React from "react";
import { Container, Header, ScrollView, TitlePage, BoldText, NormalText, Content } from "./styles";
import * as WebBrowser from 'expo-web-browser';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function Asks() {
  const { goBack } = useNavigation();


  async function handleOpenLink() {
    await WebBrowser.openBrowserAsync('https://sogirgs.org.br/sessao/protocolos-febrasgo/');
  }

  function handleGoBack() {
    goBack()
  }
  return (
    <ScrollView>
      <Container>
        <Header>
          <TouchableOpacity onPress={handleGoBack} style={{ padding: 10 }}>
            <AntDesign name="left" size={16} color="#FF429C" />
          </TouchableOpacity>
          <TitlePage>Perguntas Frequentes</TitlePage>
          <TouchableOpacity disabled style={{ padding: 10 }}>
            <AntDesign name="left" size={16} color="transparent" />
          </TouchableOpacity>
        </Header>
        <Content>
          <BoldText>01. Quando a pessoa toma remédio (anticoncepcional) há muito tempo, demora para engravidar?</BoldText>
          <NormalText>Não. O retorno da gravidez pode ser imediato mesmo quando se toma a pílula há muitos anos. É importante saber que existe risco de engravidar ao deixar de tomar a pílula por um ou dois dias, mesmo que se esteja tomando há anos.</NormalText>

          <BoldText>02. No intervalo (do remédio), há risco de engravidar antes da menstruação?</BoldText>
          <NormalText>Não. No intervalo ocorre a descamação da camada que recobre a cavidade do útero, chamada endométrio. Esse endométrio não está preparado para a gravidez. O intervalo entre uma cartela e outra é dado pelo laboratório e precisa ser seguido à risca para não haver risco de gravidez. Se a menina aumentar esse intervalo, é muito arriscado engravidar. É importante prestar atenção que cada pílula tem o intervalo de dias entre as cartelas já previsto pelo laboratório. Algumas pílulas têm intervalo de sete dias, outras de quatro dias e outras não têm intervalo. É necessário ter muita atenção com as instruções da bula sobre a maneira de usar.</NormalText>

          <BoldText>03. O anticoncepcional dá trombose?</BoldText>
          <NormalText>Ao engravidar, a menina aumenta para 64 vezes o risco de ter trombose, enquanto os anticoncepcionais aumentam no máximo quatro vezes o risco de trombose na mulher. Então, é muito mais fácil ter trombose na gravidez do que tomando pílula. Dessa forma, se a pílula for tomada corretamente, a menina estará se protegendo muito mais, porque a pílula reduz em mais de 99% o risco de engravidar.</NormalText>

          <BoldText>04. Por que a mulher sente dor no seio durante a menstruação?</BoldText>
          <NormalText>O ciclo menstrual da mulher vai do primeiro dia da menstruação ao primeiro dia da próxima menstruação. Na primeira metade do ciclo menstrual, age o hormônio chamado estrogênio, que provoca o desenvolvimento das estruturas dentro da mama e dilatação dos vasos sanguíneos. Na segunda metade do ciclo, age outro hormônio, chamado progesterona. Ele aumenta a proliferação do tecido glandular da mama e faz com que os minúsculos vasos fiquem mais permeáveis, deixando passar líquido para fora dos vasos e dando a sensação de que a mama está inchada. Isso pode causar desconforto e sensação de peso ou distensão das mamas. Quando a menstruação chega, as modificações da mama desaparecem e passa esse desconforto.</NormalText>

          <BoldText>05. Por que as mulheres sentem cólicas?</BoldText>
          <NormalText>As cólicas menstruais são comuns e podem acometer até 70% das meninas com idade entre 12 e 19 anos. Na maioria das vezes, são dores suportáveis ou passam com o uso de um analgésico. Em 10% das meninas, as cólicas podem ser graves e acompanhadas de muita dor, vômitos, palidez cutânea e incapacidade para exercer as funções e ir à escola. A cólica ocorre porque o endométrio, a camada da cavidade do útero que descama durante a menstruação, libera grandes quantidades de prostaglandinas eicosanoides ao descamar. Essas substâncias promovem contrações uterinas e vasoconstrição, o que leva à redução da oxigenação do músculo do útero e resulta em contrações fortes e dolorosas. Mas é preciso estar atenta, porque cólicas que ocorrem durante todos os dias do sangramento e que vão ficando cada vez mais intensas podem ocorrer na endometriose. Por isso, é importante consultar um médico nesses casos.</NormalText>

          <BoldText>06. O anticoncepcional engorda?</BoldText>
          <NormalText>A pílula anticoncepcional surgiu na vida das mulheres brasileiras na década de 1960. Essas pílulas iniciais tinham alta dosagem hormonal, o que provocava vários efeitos adversos, entre os quais o ganho de peso. Nas pílulas atuais, houve grande redução da dose hormonal, sem comprometer a segurança e, em geral, elas não promovem o aumento de peso. Entretanto, muitas meninas ainda deixam de usar o anticoncepcional por medo de engordar.</NormalText>

          <BoldText>07. Tomar pílula do dia seguinte com frequência pode trazer algum risco de morte?</BoldText>
          <NormalText>O anticoncepcional é muito seguro para a saúde das adolescentes e promove muito mais benefícios do que riscos. A pílula de emergência, conhecida como a pílula do dia seguinte, é para ser tomada somente quando a menina não usa pílula ou outro método anticoncepcional. Se ela teve uma relação desprotegida e tomou a pílula de emergência, deve procurar a unidade de saúde ou seu ginecologista na sequência para solicitar um método anticoncepcional seguro. A pílula do dia seguinte tem eficácia bem menor em comparação com os anticoncepcionais de uso contínuo.</NormalText>

          <BoldText>08. O uso incorreto do anticoncepcional, relativamente a dia e horário, pode interferir no ciclo menstrual?</BoldText>
          <NormalText>Ao tomar anticoncepcional, o ciclo natural deixa de existir. O ciclo é produzido artificialmente pelo anticoncepcional. A ingestão incorreta pode causar sangramento irregular e aumentar o risco de engravidar.</NormalText>

          <BoldText>09. Quais os riscos da pílula do dia seguinte? Esse é o melhor método quando a camisinha estourar?</BoldText>
          <NormalText>Sim, a pílula do dia seguinte é usada para evitar a gravidez quando a menina não está usando nenhum método e a camisinha estoura. É importante lembrar que a pílula do dia seguinte previne 50% das gravidezes que poderiam ocorrer. Mas a eficácia da pílula do dia seguinte ainda é baixa e ela não pode ser utilizada como o único método para evitar a gravidez, pois não previne tanto quanto a pílula tomada corretamente todos os dias. Após tomar a pílula do dia seguinte, vá ao médico para que ele lhe prescreva um método anticoncepcional seguro.</NormalText>

          <BoldText>10. É necessário ter vida sexual para tomar anticoncepcional? Não, algumas meninas precisam tomar a pílula para regular a menstruação ou melhorar a pele e as cólicas menstruais.</BoldText>
          <NormalText>Não, algumas meninas precisam tomar a pílula para regular a menstruação ou melhorar a pele e as cólicas menstruais.</NormalText>

          <BoldText>11. Quando a mulher está no período fértil?</BoldText>
          <NormalText>A duração do ciclo feminino varia, sendo mais comum que fique entre 23 e 35 dias. A ovulação acontece no meio do ciclo, aproximadamente entre o 12o e 16o dia do ciclo menstrual. O primeiro dia do ciclo menstrual é o primeiro dia da menstruação (dia 1). Muitas mulheres acreditam que ovulam no 14o dia, mas essa é uma média, e o dia da ovulação pode variar de acordo com o ciclo. A gravidez acontece no período da ovulação e pode ocorrer entre o 11o ao 17o dia do ciclo menstrual, porém a ovulação pode ocorrer também fora desse período. Portanto, se acontecer uma relação sexual entre homem e mulher sem proteção (anticoncepcionais e preservativos masculinos ou femininos), e caso a mulher esteja no período fértil, há grande chance de ocorrer a gravidez.</NormalText>

          <BoldText>12. Existe alguma chance de engravidar novamente após fazer laqueadura?</BoldText>
          <NormalText>A laqueadura é uma cirurgia para interromper o trânsito das trompas uterinas. Um pequeno segmento das trompas é cortado e amarrado, interrompendo, assim, a passagem do óvulo e dos espermatozoides. É um método anticoncepcional muito seguro, mas ainda tem um índice de falha. Aproximadamente, 5 mulheres em 1.000 ficarão grávidas após o procedimento.</NormalText>

          <BoldText>13. De quanto em quanto tempo é possível tomar a pílula do dia seguinte?</BoldText>
          <NormalText>A pílula do dia seguinte é um método contraceptivo apenas para emergências. Não pode ser usado rotineiramente. Ao usar a primeira vez, deve ser agendada uma consulta com o ginecologista para tomar a pílula diária ou escolher outro método anticoncepcional após o médico esclarecer sobre todas as opções disponíveis.</NormalText>

          <BoldText>14. Amamentar faz o peito cair?</BoldText>
          <NormalText>Existem vários fatores que influenciam a flacidez nos seios, além da própria amamentação. Por exemplo, depende do tipo de pele, do tamanho das mamas, se a menina tem mudança brusca de peso, se tem pele muito seca e se usa sutiã adequadamente, nem frouxo e nem apertado, apenas firme o suficiente para manter os seios na posição horizontal. A amamentação por tempo prolongado e após várias gestações favorece a queda do peito. A amamentação é extremamente importante, pois previne contra o câncer de mama, é o melhor alimento para a criança, oferece proteção contra doenças e é um momento de grande compartilhamento de carinho e amor entre a mãe e o bebê. Por isso, amamentar é mais importante do que a estética e significa mais saúde para o bebê e para a mãe.</NormalText>

          <BoldText>15. Quem toma vacina do HPV precisa usar camisinha?</BoldText>
          <NormalText>A vacina disponível contra o HPV até o momento protege contra no máximo quatro tipos de HPV. Ela é chamada vacina quadrivalente e protege contra os tipos 16 e 18, além dos tipos 6 e 11, que são responsáveis pelos condilomas, conhecidos como verrugas na genitália do homem e da mulher. Existem cerca de 200 outros tipos de HPV que não são cobertos pela vacina, então a camisinha precisa ser usada sempre para evitar que a pessoa contraia outras doenças que favorecem a infecção pelo HIV. Além disso, a camisinha é necessária para a prevenção contra outras infecções sexualmente transmissíveis como a AIDS, hepatite, sífilis, clamídia, gonorreia, micoplasma, entre outras.</NormalText>

          <BoldText>16. Quando a menina toma pílula há muito tempo, demora para engravidar?</BoldText>
          <NormalText>NÃO. Independentemente do tempo que a mulher tomar pílula, pouco ou muito tempo, ao parar de usar, poderá engravidar no primeiro mês. Dentro de um ano após parar a pílula, 85% das mulheres ficam grávidas, o que é uma taxa normal também para quem nunca tomou remédio.</NormalText>

          <NormalText style={{ paddingTop: '4%' }}>
            Disponível em: Protocolo Febrasgo (2020) -
            <NormalText style={{ color: '#2dabff' }} onPress={handleOpenLink}>
              https://sogirgs.org.br/sessao/protocolos-febrasgo/
            </NormalText>
          </NormalText>
        </Content>
      </Container>
    </ScrollView>
  )
}