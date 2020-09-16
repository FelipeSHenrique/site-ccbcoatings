import styled from 'styled-components';
import { GiEarthAmerica } from "react-icons/gi";

import bgImage from '../../assets/image/bg-sustentabilidade.png';

export const Container = styled.div`
  
`;

export const WrapperAllContent = styled.div`
  margin-top: 70px;

  @media (max-width: 768px) {
    margin-top: 120px;

  }
`;

export const SectionSustainability = styled.section`
  position: relative;
  z-index: 1;
  margin-top: 70px;
  margin-bottom: 120px;
`;

export const ContainerSustainability = styled.div`

@media (max-width: 1178px) {
  padding: 0 10%;
}

@media (max-width: 768px) {
    padding: 0px 2%;
}
`;

export const WrapperSustainability = styled.div`
  max-width: 1154px;
  margin: 0 auto;
  background: var(--color-background-about);
  box-shadow: 11px 14px 26px -6px rgba(0,0,0,0.75);
  border-radius: 100px;
  padding: 40px 44px 40px;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 80px 44px;
  }
`;

export const InfoSustainability = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 15%;

    p {
      font-size: 16px;
      color: var(--color-white);
      margin-top: 10px;
      line-height: 1.5;
    }

    @media (max-width: 1000px) {
      padding: 0 2%;
    }
`;

export const WrapperIcon = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    display: inline-block;
    width: 100px;
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
    width: 100px;
    height: 4px;
    margin-left: 14px;
    background: var(--color-yellow);
  }

  @media (max-width: 768px) {
    &::before {
      width: 50px; 
    }
    &::after { 
      width: 50px;  
    }
  }
`;

export const IconEarth = styled(GiEarthAmerica)`
  width: 160px;
  height: 160px;
  fill: var(--color-green-dark);
`;

export const BgImage = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  position: absolute;
  top: 50px;
  right: 0;
  bottom: 50px;
  left: 0;
  z-index: 0;
`;

