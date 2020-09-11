import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  StyleBurger,
  WrapperMenuMobile
} from './styles';

function MenuMobile() {

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
            <Link to="/">início</Link>
          </li>
          <li>
            <Link to="/sobre">sobre nós</Link>
          </li>
          <li>
            <Link to="/produtos">produtos</Link>
          </li>
          <li>
            <Link to="/sustentabilidade">sustentabilidade</Link>
          </li>
          <li>
            <Link to="/contato">contato</Link>
          </li>
        </ul>
      </WrapperMenuMobile>
    </Container>
  );
}

export default MenuMobile;