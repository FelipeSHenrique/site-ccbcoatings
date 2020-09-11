import React from 'react';

import { Container } from './styles';

function Titles({ title, subTitle }) {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </Container>
  );
}

export default Titles;