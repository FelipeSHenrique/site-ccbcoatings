import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

function ButtonMore() {
  const { t } = useTranslation();
  return (
    <Container>
      <Link to="/produtos">{t('textButtonMore')}</Link>
    </Container>
  );
}

export default ButtonMore;