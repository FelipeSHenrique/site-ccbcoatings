import React from 'react';

import {
  Container,
  ImageLogo
} from './styles';

import logoCCB from '../../assets/image/logo-ccb.png';
import MenuMobile from '../MenuMobile';

function HeaderLogo() {
  return (
    <Container>
      <ImageLogo src={logoCCB} />
      <MenuMobile />
    </Container>
  );
}

export default HeaderLogo;