import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { useAlert } from "react-alert";
import { useTranslation } from 'react-i18next';

import HeaderLogo from '../../components/HeaderLogo';
import Menu from '../../components/Menu';
import Titles from '../../components/Titles';
import FooterContact from '../../components/FooterContact';

import api from '../../services/api';

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
  const alert = useAlert();

  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();

    api.post('access', {
      name,
      email,
      subject,
      message
    }).then(() => {
      alert.success(<div style={{ color: 'white' }}>Menssagem enviado com sucesso!</div>);
    }).catch(() => {
      alert.error(<div style={{ color: 'white' }}>Erro no envio!</div>);
    });

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const title = useRef(null);
  const wrapperContact = useRef(null);
  const wrapperForm = useRef(null);

  useEffect(() => {

    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(title.current, { y: -100, stagger: .6, opacity: 0 })
      .from(wrapperContact.current, { x: -300, opacity: 0, duration: .5 })
      .from(wrapperForm.current, { x: 300, opacity: 0, duration: .5 });

  }, []);

  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <div ref={title}>
          <Titles title={t('textTitleContact')} subTitle="ccb coatings" />
        </div>

        <WrapperContainer>
          <WrapperInfoContact ref={wrapperContact}>

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
                {t('textAddressContact')}
              </TextInfo>
            </LocationContact>

          </WrapperInfoContact>

          <WrapperForm ref={wrapperForm} onSubmit={submitRequest}>
            <input
              type="text"
              placeholder={t('textFormName')}
              name="name"
              onChange={e => setName(e.target.value)}
              value={name}
              required
            />
            <input
              type="text"
              placeholder={t('textFormEmail')}
              name="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder={t('textFormSubject')}
              name="subject"
              onChange={e => setSubject(e.target.value)}
              value={subject}
            />
            <textarea
              placeholder={t('textFormMessage')}
              name="message"
              onChange={e => setMessage(e.target.value)}
              value={message}
            >
            </textarea>
            <button type="submit">{t('textFormButton')}</button>
          </WrapperForm>
        </WrapperContainer>

      </WrapperAllContent>

      <FooterContact />

      <SectionMaps>
        <iframe title="Endereço da CCB Coatings" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.904822449065!2d-49.083929784420064!3d-25.340974635589323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dceb82779ec4e3%3A0x1d7d3c2aa72d2423!2sRodovia%20do%20Caqui%2C%202443%20-%20Jardim%20Santa%20Angelina%2C%20Campina%20Grande%20do%20Sul%20-%20PR%2C%2083430-000!5e0!3m2!1spt-BR!2sbr!4v1599855944543!5m2!1spt-BR!2sbr" style={{ border: 0 }} aria-hidden="false" ></iframe>
      </SectionMaps>

    </Container>
  );
}

export default Contact;