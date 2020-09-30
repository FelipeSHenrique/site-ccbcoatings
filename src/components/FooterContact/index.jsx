import React from 'react';
import { useTranslation } from 'react-i18next';

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

import logoCCB from '../../assets/image/ccb-teste.svg';
// import logoCCB from '../../assets/image/logo-ccb.png';

function FooterContact() {

  const { t } = useTranslation();

  return (
    <Container>

      <WrapperFooter>

        <LogoCcb src={logoCCB} alt="CCB Coatings" />

        <Address>
          <IconEarth />
          <p>{t('textAddress')}</p>
        </Address>

        <SocialNetWork>
          <a href="https://www.facebook.com/pages/Ccb-Coatings/289542074888447" target="_blank" rel="noreferrer noopener">
            <IconFacebook />
          </a>
          <a href="https://instagram.com/ccbcoatings?igshid=fpla6te4v7hw" target="_blank" rel="noreferrer noopener">
            <IconInstagram />
          </a>
          <IconWhatsapp />
        </SocialNetWork>

      </WrapperFooter>

    </Container>
  );
}

export default FooterContact;