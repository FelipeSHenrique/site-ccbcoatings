import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  Container,
  StyleBurger,
  WrapperMenuMobile
} from './styles';

function MenuMobile() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <StyleBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyleBurger>
      <WrapperMenuMobile open={open}>
        <ul>
          <li>
            <Link to="/">{t('textMenuHome')}</Link>
          </li>
          <li>
            <Link to="/sobre">{t('textMenuAbout')}</Link>
          </li>
          <li>
            <Link to="/produtos">{t('textMenuProducts')}</Link>
          </li>
          <li>
            <Link to="/sustentabilidade">{t('textMenuSustainability')}</Link>
          </li>
          <li>
            <Link to="/contato">{t('textMenuContact')}</Link>
          </li>
        </ul>
      </WrapperMenuMobile>
    </Container>
  );
}

export default MenuMobile;