import styled from 'styled-components';

import bgImage from '../../assets/image/bg-about.png';

export const Container = styled.div`
  
`;

export const WrapperAllContent = styled.div`
  margin-top: 70px;

  @media (max-width: 768px) {
    margin-top: 120px;

  }
`;

export const SectionAbout = styled.section`
  position: relative;
  z-index: 1;
  margin-top: 70px;
  margin-bottom: 120px;
`;

export const ContainerAbout = styled.div`

@media (max-width: 1178px) {
  padding: 0 10%;
}

@media (max-width: 768px) {
    padding: 0px 2%;
}
`;

export const WrapperAbout = styled.div`
  max-width: 1154px;
  margin: 0 auto;
  background: var(--color-background-about);
  padding: 100px 44px;
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 80px 44px;
  }
`;

export const InfoAbout = styled.div`
    padding-right: 144px;
    display: flex;
    flex-direction: column;

    >h3 {
      align-self: center;
      font-size: 20px;
      font-weight: bold;
      color: var(--color-white);
      text-transform: uppercase;
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

    p {
      font-size: 16px;
      color: var(--color-white);
      margin-top: 40px;
      line-height: 1.5;
    }

    @media (max-width: 1000px) {
      padding-right: 0;
    }
`;

export const InfoImage = styled.img`

@media (max-width: 1000px) {
    display: none;
}
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

