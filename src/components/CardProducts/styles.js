import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    max-width: 320px;
    padding: 20px;
    box-shadow: 0 5px 202px rgba(0,0,0,0.3);
`;

export const CardHeader = styled.div`
    position: relative;
    img {
        position: relative;
        top: -50px;
        max-width: 100%;
        border-radius: 4px;
    }
    h2 {
        position: relative;
        top: -30px;
        font-size: 25px;
        font-weight: bold;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 80%;
          display: inline-block;
          width: 40px;
          height: 4px;
          background: var(--color-yellow);
        }
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 80%;
          display: inline-block;
          width: 40px;
          height: 4px;
          background: var(--color-yellow);
        }
    }
    
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  p {
      font-size: 16px;
      color: var(--color-info-text);
      text-align: justify;
  }

  .line {
      width: 100%;
      height: 2px;
      background: var(--color-grey);
      margin: 20px 0;
  }

  ul {
      li {
          list-style: circle;
      }

      li + li {
          margin-top: 10px;
      }
  }

`;

