import React from 'react';

import HeaderLogo from '../../components/HeaderLogo';
import Menu from '../../components/Menu';
import Titles from '../../components/Titles';
import FooterContact from '../../components/FooterContact';

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
  WrapperForm,
  SectionMaps
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

      <SectionMaps>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.904822449065!2d-49.083929784420064!3d-25.340974635589323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dceb82779ec4e3%3A0x1d7d3c2aa72d2423!2sRodovia%20do%20Caqui%2C%202443%20-%20Jardim%20Santa%20Angelina%2C%20Campina%20Grande%20do%20Sul%20-%20PR%2C%2083430-000!5e0!3m2!1spt-BR!2sbr!4v1599855944543!5m2!1spt-BR!2sbr" style={{ border: 0 }} aria-hidden="false" ></iframe>
      </SectionMaps>

      <FooterContact />
    </Container>
  );
}

export default Contact;