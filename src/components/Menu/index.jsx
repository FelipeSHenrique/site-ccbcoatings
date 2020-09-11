import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, WrapperMenu } from './styled';

function Menu() {

  const [statusMenu, setStatusMenu] = useState(0);

  const menuContent = useRef();

  useEffect(() => {
    const topMenu = menuContent.current.offsetTop;
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > topMenu;
      if (scrollCheck !== statusMenu) {
        setStatusMenu(scrollCheck);
      }
    });
  }, [statusMenu]);


  return (
    <Container statusmenu={statusMenu} ref={menuContent}>
      <WrapperMenu>
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
      </WrapperMenu>
    </Container>
  );
}

export default Menu;