import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Container, WrapperMenu } from './styled';

function Menu() {

  const { t } = useTranslation();

  return (
    <Container>
      <WrapperMenu>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">{t('textMenuHome')}</NavLink>
          </li>
          <li>
            <NavLink to="/sobre" activeClassName="active">{t('textMenuAbout')}</NavLink>
          </li>
          <li>
            <NavLink to="/produtos" activeClassName="active">{t('textMenuProducts')}</NavLink>
          </li>
          <li>
            <NavLink to="/sustentabilidade" activeClassName="active">{t('textMenuSustainability')}</NavLink>
          </li>
          <li>
            <NavLink to="/contato" activeClassName="active">{t('textMenuContact')}</NavLink>
          </li>
        </ul>
      </WrapperMenu>
    </Container>
  );
}

export default Menu;