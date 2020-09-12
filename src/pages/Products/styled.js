import styled from 'styled-components';

import backgroundHeader from '../../assets/image/background-header.png';

export const Container = styled.div`
  
`;

export const SectionProducts = styled.div`

  max-width: 1154px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


export const Cards = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 51px;

  @media (max-width: 1178px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px 2%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0px 2%;
  }
`;


export const BgToLogo = styled.div`

  @media (min-width: 768px) {
  height: 20vh;
  background: url(${backgroundHeader});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  }

`;

export const WrapperAllContent = styled.div`
  position: relative;
  z-index: 999;
`;
