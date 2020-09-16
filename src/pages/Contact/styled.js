import styled, { css } from 'styled-components';
import { AiOutlineMail, AiOutlinePhone, AiFillEnvironment } from "react-icons/ai";

export const Container = styled.div`
  
`;

export const WrapperAllContent = styled.div`
  max-width: 1154px;
  margin: 0px auto;
`;

export const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  margin: 70px 0;

  @media (max-width: 1178px) {
    padding: 0 2%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2%;
  }
`;

export const WrapperInfoContact = styled.div`
  background: var(--color-background-about);
  padding: 10px 30px 40px;
`;

export const EmailContact = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--color-grey);
  padding: 30px 0;
`;

const iconCSS = css`
  width: 32px;
  height: 32px;
  fill: var(--color-yellow);
  margin-right: 15px;
`;

export const IconEmail = styled(AiOutlineMail)`${iconCSS}`;

export const PhoneContact = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--color-grey);
  padding: 30px 0;
`;

export const IconPhone = styled(AiOutlinePhone)`${iconCSS}`;

export const LocationContact = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--color-grey);
  padding: 30px 0;
`;

export const IconLocation = styled(AiFillEnvironment)`${iconCSS}`;

export const TextInfo = styled.h4`
  font-size: 16px;
  color: var(--color-white);
  font-weight: 400;
`;

export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  
  input, textarea{
    border: 2px solid var(--color-grey);
    padding: 10px 5px;
    border-radius: 6px;
    margin-bottom: 20px;
    outline: none;
  }

  textarea {
    height: 95px;
    resize: none;
  }

  button {
    align-self: flex-start;
    background: var(--color-yellow);
    padding: 12px 60px;
    font-size: 18px;
    font-weight: bold;
    color: var(--color-white);
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    button {
      align-self: center;
    }
  }
    
`;

export const SectionMaps = styled.div`
  iframe {
    width: 100%;
    height: 356px;
  }
`;

