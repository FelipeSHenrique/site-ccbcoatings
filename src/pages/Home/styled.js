import styled, { keyframes } from 'styled-components';
import backgroundHeader from '../../assets/image/background-header.png';
import backgroundMessage from '../../assets/image/background-message.png';
import bgElements from '../../assets/image/bg-elements.png';


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
`;

export const Cards = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 51px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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




