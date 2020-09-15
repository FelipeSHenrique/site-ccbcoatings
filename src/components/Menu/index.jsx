import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, WrapperMenu } from './styled';

function Menu() {

  return (
    <Container>
      <WrapperMenu>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">início</NavLink>
          </li>
          <li>
            <NavLink to="/sobre" activeClassName="active">sobre</NavLink>
          </li>
          <li>
            <NavLink to="/produtos" activeClassName="active">produtos</NavLink>
          </li>
          <li>
            <NavLink to="/sustentabilidade" activeClassName="active">sustentabilidade</NavLink>
          </li>
          <li>
            <NavLink to="/contato" activeClassName="active">contato</NavLink>
          </li>
        </ul>
      </WrapperMenu>
    </Container>
  );
}

export default Menu;