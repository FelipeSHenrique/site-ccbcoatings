import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5% 0px;
  background: var(--color-transparent);
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 100;
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
