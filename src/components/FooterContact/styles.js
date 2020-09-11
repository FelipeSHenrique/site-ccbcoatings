import styled, { css } from 'styled-components';
import { GiEarthAmerica } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


export const Container = styled.div`
  background: var(--color-transparent);
`;

export const WrapperFooter = styled.div`
  max-width: 1154px;
  margin: 0 auto;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 33px 0;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 38px;
    padding: 33px 2%;
  }
`;

export const LogoCcb = styled.img`
  height: 62px;

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 16px;
    color: var(--color-white);
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

export const IconEarth = styled(GiEarthAmerica)`
  width: 50px;
  height: 50px;
  fill: var(--color-yellow);
`;

export const SocialNetWork = styled.div`
  justify-self: end;
  align-self: center;

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const iconCSS = css`
  width: 32px;
  height: 32px;
  fill: var(--color-white);
  margin-right: 29px;
`;

export const IconFacebook = styled(FaFacebook)`${iconCSS}`;

export const IconInstagram = styled(FaInstagram)`${iconCSS}`;

export const IconWhatsapp = styled(FaWhatsapp)`${iconCSS}`;

