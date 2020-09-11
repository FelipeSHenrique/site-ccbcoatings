import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid var(--color-grey);
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >img {
    width: 103px;
  }

  >h2 {
    margin-top: 32px;
    text-transform: uppercase;
  }
  
  >p {
    max-width: 245px;
    margin-top: 31px;
    color: var(--color-info-text);
    text-align: center;
  }

  >a {
    display: block;
    width: 135px;
    padding: 12px 14px;
    color: var(--color-white);
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    background-color: var(--color-yellow);
    margin-top: 51px;
  }

`;

