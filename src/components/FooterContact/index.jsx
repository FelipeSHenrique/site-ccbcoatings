import React from 'react';

import {
  Container,
  WrapperFooter,
  LogoCcb,
  Address,
  IconEarth,
  SocialNetWork,
  IconFacebook,
  IconInstagram,
  IconWhatsapp
} from './styles';

import logoCCB from '../../assets/image/logo-ccb.svg';

function FooterContact() {
  return (
    <Container>

      <WrapperFooter>

        <LogoCcb src={logoCCB} alt="CCB Coatings" />

        <Address>
          <IconEarth />
          <p>Rodovia do Caqui, 2443, Campina Grande do Sul - PR /
          83430-000</p>
        </Address>

        <SocialNetWork>
          <IconFacebook />
          <IconInstagram />
          <IconWhatsapp />
        </SocialNetWork>

      </WrapperFooter>

    </Container>
  );
}

export default FooterContact;