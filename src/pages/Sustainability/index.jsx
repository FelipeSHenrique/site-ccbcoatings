import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";

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

  const title = useRef(null);
  const wrapper = useRef(null);
  const imgEarth = useRef(null);
  const infoText = useRef(null);

  useEffect(() => {

    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(title.current, { y: -100, stagger: .6, opacity: 0 })
      .from(wrapper.current, { x: 300, opacity: 0, duration: .5 })
      .from(imgEarth.current, { opacity: 0 })
      .from(infoText.current, { y: 300, opacity: 0, duration: .3 });

  }, []);

  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <div ref={title}>
          <Titles title="SUSTENTABILIDADE" subTitle="ccb coatings" />
        </div>

        <SectionSustainability>
          <ContainerSustainability>

            <WrapperSustainability ref={wrapper}>

              <WrapperIcon ref={imgEarth}>
                <IconEarth />
              </WrapperIcon>

              <InfoSustainability ref={infoText}>
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