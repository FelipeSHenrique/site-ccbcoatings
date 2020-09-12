import React from 'react';

import { 
  Container, 
  BgToLogo, 
  WrapperAllContent ,
  Cards,
  SectionProducts
} from './styled';

import baldeTeste from '../../assets/image/balde-tinta.jpg';

import Menu from '../../components/Menu';
import CardProducts from '../../components/CardProducts';
import Titles from '../../components/Titles';

function Products() {
  return (
    <Container>
      <BgToLogo />
      <WrapperAllContent>
        <Menu />
        <SectionProducts>
          <Titles title="Produtos" subTitle="ccb coatings" />
          <Cards>
            <CardProducts icon={baldeTeste} title="linha pisos" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira."/>
            <CardProducts icon={baldeTeste} title="linha wb" list={["ISOLANTES BASE ÁGUA", "PRIMER BASE ÁGUA", "TINGIDORES BASE ÁGUA"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira."/>
            <CardProducts icon={baldeTeste} title="tingidores" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira."/>
            
            <CardProducts icon={baldeTeste} title="linha uv" list={["PRIMER’S UV", "TINGIDORES UV", "TINTAS DE IMPRESSÃO UV", "SELADORES UV", "MASSAS UV", "FUNDO  ABRASIVO UV (TABER)", "VERNIZ  UV", "DILUENTES"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira."/>
            <CardProducts icon={baldeTeste} title="resinas" list={["PISOS DE MADEIRA", "PISOS DE ALTO PADRÃO", "PISOS ISOLANTE ÁGUA", "PISOS OXIDO DE ALUMINIO"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira."/>
            <CardProducts icon={baldeTeste} title="linha pu" list={["FUNDO PU", "PRIMER PU", "SELADORES PU", "ESMALTES PU", "VERNIZ PU", "DILUENTES PU"]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira."/>
          
          </Cards>
        </SectionProducts>
      </WrapperAllContent>
    </Container>
  );
}

export default Products;