import React from 'react';

import { Container } from './styles';

function CardHome({ icon, title, info }) {
  return (
    <Container>
      <img src={icon} alt={title} />
      <h2>{title}</h2>
      <p>{info}</p>
      <a href="/produtos">saiba mais</a>
    </Container>
  );
}

export default CardHome;