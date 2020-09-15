import styled from 'styled-components';
import LogoFooter from '../../assets/image/LogoFooter.png';

export const Container = styled.div`
  
  footer > .gradiente {
    height: inherit;
    background: var(--color-transparent-weak);
    display: flex;
    flex-direction: column;
  }

  footer {
    background-image: url(${LogoFooter});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .gradiente > h1 {
    text-align: center;
    font-size: 60px;
    padding: 130px;
    margin: 0 auto;
    font-weight: 300;
    color: white;
    width: 80%;

  }

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

export const WrapperAllContent = styled.div`

`;
