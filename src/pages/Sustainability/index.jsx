import React from 'react';

import HeaderLogo from '../../components/HeaderLogo';
import Menu from '../../components/Menu';
import Titles from '../../components/Titles';
import FooterContact from '../../components/FooterContact';

import {
  Container,
  WrapperAllContent,
  SectionSustainability,
  ContainerSustainability,
  WrapperSustainability,
  InfoSustainability,
  WrapperIcon,
  IconEarth,
  BgImage
} from './styled';

function Sustainability() {
  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>

        <Titles title="SUSTENTABILIDADE" subTitle="ccb coatings" />

        <SectionSustainability>
          <ContainerSustainability>

            <WrapperSustainability>

              <WrapperIcon>
                <IconEarth />
              </WrapperIcon>

              <InfoSustainability>
                <p>Desde que foi criada, há 30 anos, a CCB Coatings carrega no seu DNA responsabilidade ambiental.</p>

                <p>Temos a preocupação de atingir e demonstrar um desempenho ambiental correto, controlando os impactos de nossas atividades, produtos e serviços, levando em consideração em nossa política foco em objetivos ambientais. </p>

                <p>Por isso, temos um programa de reciclagem  aonde tudo o que foi utilizado no nosso trabalho e não precisaremos mais passa pelo processo, desde os materiais de escritório como papéis e copos plásticos aos resíduos industriais, como borras e águas de reação. </p>

                <p>A inovação de nossos produtos da CCB também fazem parte da nossa gestão de sustentabilidade, nossa tecnologia foca na economia energia em seus processos causando assim menor impacto ao meio ambiente em toda nossa linha de produtos.</p>

                <p>Acreditamos que fazendo nossa parte, reciclando, economizando energia e causando o menor impacto possível ao meio ambiente, contribuimos para um futuro melhor.</p>
              </InfoSustainability>

            </WrapperSustainability>

          </ContainerSustainability>

          <BgImage />

        </SectionSustainability>

        <FooterContact />

      </WrapperAllContent>
    </Container>
  );
}

export default Sustainability;