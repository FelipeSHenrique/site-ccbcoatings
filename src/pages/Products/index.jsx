import React from 'react';

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
  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <SectionProducts>
          <Titles title="Produtos" subTitle="ccb coatings" />
          <Cards>
            <CardProducts icon={baldeTeste} title="linha pisos" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            <CardProducts icon={baldeTeste} title="linha wb" list={["ISOLANTES BASE ÁGUA", "PRIMER BASE ÁGUA", "TINGIDORES BASE ÁGUA"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            <CardProducts icon={baldeTeste} title="tingidores" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

            <CardProducts icon={baldeTeste} title="linha uv" list={["PRIMER’S UV", "TINGIDORES UV", "TINTAS DE IMPRESSÃO UV", "SELADORES UV", "MASSAS UV", "FUNDO  ABRASIVO UV (TABER)", "VERNIZ  UV", "DILUENTES"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            <CardProducts icon={baldeTeste} title="resinas" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />
            <CardProducts icon={baldeTeste} title="linha pu" list={["FUNDO PU", "PRIMER PU", "SELADORES PU", "ESMALTES PU", "VERNIZ PU", "DILUENTES PU"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

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