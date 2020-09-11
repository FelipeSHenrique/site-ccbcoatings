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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">About</Link>
          </li>
          <li>
            <Link to="/produtos">Products</Link>
          </li>
          <li>
            <Link to="/sustentabilidade">sustentabilidade</Link>
          </li>
          <li>
            <Link to="/contato">Contact</Link>
          </li>
        </ul>
      </WrapperMenuMobile>
    </Container>
  );
}

export default MenuMobile;