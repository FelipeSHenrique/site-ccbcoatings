import React from 'react';

import { Container } from './styles';

function CardProducts({icon, title, info, list}) {
  return <Container>

    <h2>{title}</h2>
    <img src={icon} alt={title}/>
    <p>{info}</p>
    <div className="linha"></div>
    <ul>
      {list.map((value) => (
        <li>{value}</li>
      ))}
    </ul>
  </Container>;
}

export default CardProducts;