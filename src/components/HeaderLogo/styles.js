import styled from 'styled-components';

import backgroundHeader from '../../assets/image/background-header.png';

export const Container = styled.div`
  background-image: url(${backgroundHeader});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;

  @media (max-width: 768px) {
    position: fixed;
  }
`;

export const WrapperGradient = styled.div`
  background: var(--color-transparent);
  display: flex;
  justify-content: center;
  padding: 1.5% 0px;

  @media (max-width: 768px) {
    background: var(--color-dark);
    justify-content: space-between;
    align-items: center; 
  }
`;

export const ImageLogo = styled.img`
    min-width: 10%;
    @media (max-width: 768px) {
      width: 40%;
    }
`;
