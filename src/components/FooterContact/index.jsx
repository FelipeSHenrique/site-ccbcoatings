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
          <a href="https://www.facebook.com/pages/Ccb-Coatings/289542074888447" target="_blank">
            <IconFacebook />
          </a>
          <a href="https://instagram.com/ccbcoatings?igshid=fpla6te4v7hw" target="_blank">
            <IconInstagram />
          </a>
          <IconWhatsapp />
        </SocialNetWork>

      </WrapperFooter>

    </Container>
  );
}

export default FooterContact;