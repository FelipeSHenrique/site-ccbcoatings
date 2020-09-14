import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-dark);
  /* position: ${({ statusmenu }) => statusmenu ? 'fixed' : 'static'};
  top: 0;
  right: 0;
  left: 0;
  z-index: 20; */
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

      a {
        color: var(--color-white);
        display: inline-block;
        font-size: 22px;
        text-transform: uppercase;
        padding: 0 20px;

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: var(--color-yellow);
          transition: width .3s;
        }

        &:hover::after {
        width: 100%;
        transition: width .3s;
        }

      }

      .active::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: var(--color-yellow);
      }

    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
