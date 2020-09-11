import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 65px;
  border: 2px solid var(--color-yellow);
  transition: all .2s ease;

  >a {
    display: block;
    padding: 12px 14px;
    color: var(--color-white);
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
  }

  &:hover {
    background: var(--color-yellow);
  }
`;
