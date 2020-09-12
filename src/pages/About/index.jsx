import React from 'react';
import Menu from '../../components/Menu';

import { Container, BgToLogo, WrapperAllContent } from './styled';

function About() {
  return (
    <Container>
      <BgToLogo />
      <WrapperAllContent>
        <Menu />

      </WrapperAllContent>
    </Container>
  );
}

export default About;