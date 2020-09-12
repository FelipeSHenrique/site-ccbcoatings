import styled from 'styled-components';

import backgroundHeader from '../../assets/image/background-header.png';

export const Container = styled.div`
  
`;

export const BgToLogo = styled.div`

  @media (min-width: 768px) {
  height: 20vh;
  background: url(${backgroundHeader});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  }

`;

export const WrapperAllContent = styled.div`
  position: relative;
  z-index: 999;
`;
