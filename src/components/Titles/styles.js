import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;

    > h1 {
        font-size: 45px;
        font-weight: 400;
    }

    > h2 {
        font-size: 20px;
        font-weight: bold;
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 100%;
          display: inline-block;
          width: 40px;
          height: 4px;
          margin-right: 14px;
          background: var(--color-yellow);
        }
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          display: inline-block;
          width: 40px;
          height: 4px;
          margin-left: 14px;
          background: var(--color-yellow);
        }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 30px;
      }
    }

`;
