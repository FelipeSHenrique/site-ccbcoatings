import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function ButtonMore() {
  return (
    <Container>
      <Link to="/produtos">saber mais</Link>
    </Container>
  );
}

export default ButtonMore;