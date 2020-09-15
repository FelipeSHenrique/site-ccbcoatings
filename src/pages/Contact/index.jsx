import React from 'react';

import HeaderLogo from '../../components/HeaderLogo';
import Menu from '../../components/Menu';
import Titles from '../../components/Titles';

import {
  Container,
  WrapperAllContent,
  WrapperContainer,
  WrapperInfoContact,
  EmailContact,
  IconEmail,
  PhoneContact,
  IconPhone,
  LocationContact,
  IconLocation,
  TextInfo,
  WrapperForm
} from './styled';

function Contact() {
  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <Titles title="contato" subTitle="ccb coatings" />

        <WrapperContainer>
          <WrapperInfoContact>

            <EmailContact>
              <IconEmail />
              <TextInfo>contact@exemplo.com</TextInfo>
            </EmailContact>

            <PhoneContact>
              <IconPhone />
              <TextInfo>+55 41 3679-2587</TextInfo>
            </PhoneContact>

            <LocationContact>
              <IconLocation />
              <TextInfo>
                Rodovia do Caqui, 2443 <br />
                Campina Grande do Sul - PR, 8343-000
              </TextInfo>
            </LocationContact>

          </WrapperInfoContact>

          <WrapperForm>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Assunto" />
            <textarea placeholder="Menssagem"></textarea>
            <button type="submit">Enviar</button>
          </WrapperForm>
        </WrapperContainer>


      </WrapperAllContent>
    </Container>
  );
}

export default Contact;