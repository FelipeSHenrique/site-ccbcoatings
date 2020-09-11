import styled from 'styled-components';

export const Container = styled.div`
   display: none;
   @media (max-width: 768px) {
    display: block;
  }
`;

export const StyleBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  position: relative;
  z-index: 22;
  margin-right: 15px;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'var(--color-yellow)' : 'var(--color-white)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const WrapperMenuMobile = styled.nav`
  background: var(--color-dark);
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  /* width: 300px; */
  width: 100%;
  z-index: 20;
  transition: transform 0.3s ease-in-out;

  >ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    
    li {
      padding: 18px 10px;
    }

    li a {
      display: block;
      padding: 0px 15px;
      color: var(--color-white);
      font-size: 22px;
      text-transform: uppercase;
    }
  }
`;
