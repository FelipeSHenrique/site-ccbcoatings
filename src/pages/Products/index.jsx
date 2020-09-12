import React from 'react';

import { Container, BgToLogo, WrapperAllContent } from './styled';

import Menu from '../../components/Menu';

function Products() {
  return (
    <Container>
      <BgToLogo />
      <WrapperAllContent>
        <Menu />

      </WrapperAllContent>
    </Container>
  );
}

export default Products;