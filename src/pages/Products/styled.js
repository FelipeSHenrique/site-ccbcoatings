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
    width: 100%;
    background-image: url(${LogoFooter});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-top: 5%;
  }

  .gradiente > h1 {
    text-align: center;
    font-size: 60px;
    padding: 130px;
    margin: 0 auto;
    font-weight: 300;
    color: white;

    @media(max-width: 768px){
      font-size: 25px;
      padding: 20px;
    }

    @media(max-width: 1178px){
      font-size: 30px;
      padding: 40px;

    }

  }

`;

export const SectionProducts = styled.div`

  max-width: 1154px;  
  margin: 0 auto;
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
    padding: 0 2%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2%;

  }
`;

export const WrapperAllContent = styled.div`

`;
