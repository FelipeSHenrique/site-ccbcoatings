import styled from 'styled-components';

export const Container = styled.div`

    border: 2px solid var(--color-grey);
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h2 {
        text-transform: uppercase;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 100%;
          display: inline-block;
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

    > img {
        margin-top: 32px;
        height: 171px;
        border-radius: 6px;
    }

    > p {
        margin-top: 31px;
        max-width: 245px;
        color: var(--color-info-text);
        text-align: center;
    }

    > .linha {
        margin-top: 20px;
        width: 100%;
        border-bottom: 2px solid var(--color-grey);
    }

    > ul {
        margin-top: 16px;
        text-align: center;
    }

    > ul li {
        position: relative;
        text-transform: uppercase;
        margin-top: 5px;
        border-bottom: 2px solid var(--color-grey);
        line-height: 2;
    }

`;
