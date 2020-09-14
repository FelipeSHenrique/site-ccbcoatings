import React from 'react';

import {
  Container,
  WrapperGradient,
  ImageLogo
} from './styles';

import logoCCB from '../../assets/image/logo-ccb.png';
import MenuMobile from '../MenuMobile';

function HeaderLogo() {
  return (
    <Container>
      <WrapperGradient>
        <ImageLogo src={logoCCB} />
        <MenuMobile />
      </WrapperGradient>
    </Container>
  );
}

export default HeaderLogo;