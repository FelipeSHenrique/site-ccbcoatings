import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-dark);
  position: ${({ statusmenu }) => statusmenu ? 'fixed' : 'static'};
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
`;

export const WrapperMenu = styled.nav`
  max-width: 818px;
  margin: 0 auto;
  
  >ul {
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    
    li {
      margin-left: 15px;
    }

    li a {
      display: block;
      padding: 0px 15px;
      color: var(--color-white);
      font-size: 22px;
      text-transform: uppercase;

      &:hover {
        border-bottom: 3px solid var(--color-yellow);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
