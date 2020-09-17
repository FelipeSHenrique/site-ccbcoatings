import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";

import {
  Container,
  WrapperAllContent,
  Cards,
  SectionProducts
} from './styled';

import baldeTeste from '../../assets/image/balde-tinta.jpg';

import Menu from '../../components/Menu';
import CardProducts from '../../components/CardProducts';
import Titles from '../../components/Titles';
import HeaderLogo from '../../components/HeaderLogo';
import FooterContact from '../../components/FooterContact';

function Products() {

  const title = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);
  const card6 = useRef(null);

  useEffect(() => {
    // let tl = gsap.timeline({ defaults: { duration: 1 } });
    gsap.from(title.current, { y: -100, stagger: .6, opacity: 0 });
    gsap.from(card1.current, { x: -500, opacity: 0, duration: 1 });
    gsap.from(card4.current, { x: -500, opacity: 0, duration: 1 });
    gsap.from(card2.current, { y: -500, opacity: 0, duration: 1 });
    gsap.from(card5.current, { y: -500, opacity: 0, duration: 1 });
    gsap.from(card3.current, { x: 500, opacity: 0, duration: 1 });
    gsap.from(card6.current, { x: 500, opacity: 0, duration: 1 });


  }, []);

  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <SectionProducts>
          <div ref={title}>
            <Titles title="Produtos" subTitle="ccb coatings" />
          </div>
          <Cards>
            <div ref={card1}>
              <CardProducts icon={baldeTeste} title="linha pisos" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            </div>
            <div ref={card2}>
              <CardProducts icon={baldeTeste} title="linha wb" list={["ISOLANTES BASE ÁGUA", "PRIMER BASE ÁGUA", "TINGIDORES BASE ÁGUA"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            </div>
            <div ref={card3}>
              <CardProducts icon={baldeTeste} title="tingidores" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            </div>
            <div ref={card4}>
              <CardProducts icon={baldeTeste} title="linha uv" list={["PRIMER’S UV", "TINGIDORES UV", "TINTAS DE IMPRESSÃO UV", "SELADORES UV", "MASSAS UV", "FUNDO  ABRASIVO UV (TABER)", "VERNIZ  UV", "DILUENTES"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            </div>
            <div ref={card5}>
              <CardProducts icon={baldeTeste} title="resinas" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            </div>
            <div ref={card6}>
              <CardProducts icon={baldeTeste} title="linha pu" list={["FUNDO PU", "PRIMER PU", "SELADORES PU", "ESMALTES PU", "VERNIZ PU", "DILUENTES PU"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            </div>

          </Cards>
        </SectionProducts>
        <footer>
          <div className="gradiente">
            <h1>RECEBA OS MELHORES PRODUTOS DA MAIOR QUALIDADE</h1>
            <FooterContact />
          </div>
        </footer>
      </WrapperAllContent>
    </Container>
  );
}

export default Products;