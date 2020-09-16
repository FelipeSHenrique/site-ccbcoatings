import styled, { keyframes } from 'styled-components';

import backgroundHeader from '../../assets/image/background-header.png';
import backgroundMessage from '../../assets/image/background-message.png';
import bgElements from '../../assets/image/bg-elements.png';
import bgCompanies from '../../assets/image/bg-em.png';


const plink = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const WrapperLogoHome = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5% 0px;
  background: var(--color-transparent);
  position: absolute;
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

export const HeaderHome = styled.header`
  height: 100vh;
  background: url(${backgroundHeader});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GradientHorizontal = styled.div`
  height: inherit;
  background: var(--color-transparent-weak);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoHeader = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;

  >h1 {
    color: var(--color-white);
    text-transform: uppercase;
    font-size: 110px;
    font-weight: 400;

    &::after {
      content: '|';
      opacity: 1;
      animation: ${plink} .7s infinite;
    }
  }

  @media (max-width: 1178px) {
    h1 {
      font-size: 80px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }
`;

// SECTION SERVICES

export const SectionProducts = styled.section`
  max-width: 1154px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >a {
    display: block;
    width: 214px;
    padding: 12px 14px;
    color: var(--color-white);
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    background-color: var(--color-yellow);
    margin-top: 51px;
  }
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

// SECTION MESSAGE

export const SectionMessage = styled.section`
  background-image: url(${backgroundMessage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 768) {
    background-attachment: scroll;
  }
`;

export const GradientHorizontalMessage = styled.div`
  background: var(--color-transparent-weak);
`;

export const WrapperMessage = styled.div`
  max-width: 1154px;
  margin: 0 auto;
  padding: 70px 0px;

  >h2, h3 {
    color: var(--color-white);
    text-transform: uppercase;
    font-weight: 400;
  }

  >h2 {
    font-size: 100px;
    
  }
  >h3 {
    font-size: 40px;
  }

  @media (max-width: 1178px) {
    padding: 50px 2%;
  }

  @media (max-width: 768px) {

    padding: 30px 2%;

    h2 {
      font-size: 60px;
    }
    h3 {
      font-size: 22px;
    }
  }
`;

// ELEMENTS

export const SectionElements = styled.section`
  background-color: var(--color-background-about);
  padding: 70px 0px;
`;

export const WrapperElements = styled.div`
  max-width: 1154px;
  margin: 0px auto;
  
  @media (max-width: 768px), (max-width: 1178px) {
    padding: 0px 2%;
  }
`;

export const SectionTecnology = styled.section`

  display: flex;

  .col-bg-title {
    width: 100%;
    flex: 3;
    background-image: url(${bgElements});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    h2 {
      font-size: 45px;
      font-weight: 400;
      text-transform: uppercase;
      color: var(--color-white);
    }
  }

  .col-info {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-red);
    padding: 50px 52px;

    p {
      font-size: 16px;
      color: var(--color-white);
      text-align: center;
      margin-top: 43px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

export const SectionQuality = styled(SectionTecnology)`
  margin-top: 51px;
  .col-info {
    background: var(--color-green);
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const GradientHorizontalBg = styled.div`
  background: var(--color-transparent-weak);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

// SECTION CAMPANIES

export const SectionCompanies = styled.section`
  background-image: url(${bgCompanies});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WrapperImages = styled.div`
  max-width: 1154px;
  margin: 0px auto;
  padding: 71px 0;
  display: flex;
`;

export const ImgItens = styled.div`
  margin-right: 70px;
  img {height: 50px;}
`;

// MAPS

export const SectionMaps = styled.div`
  iframe {
    width: 100%;
    height: 356px;
  }
`;



