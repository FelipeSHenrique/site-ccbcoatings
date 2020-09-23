import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';

import HeaderLogo from '../../components/HeaderLogo';
import Menu from '../../components/Menu';
import Titles from '../../components/Titles';
import FooterContact from '../../components/FooterContact';

import infoImage from '../../assets/image/entrada-ccb.png';

import {
  Container,
  WrapperAllContent,
  SectionAbout,
  ContainerAbout,
  WrapperAbout,
  InfoAbout,
  InfoImage,
  BgImage
} from './styled';

function About() {

  const { t } = useTranslation();

  const title = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {

    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(title.current, { x: -300, stagger: .6, opacity: 0 })
      .from(wrapper.current, { x: 300, opacity: 0, duration: .5 });

  }, []);

  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <div ref={title}>
          <Titles title={t('textAboutUs')} subTitle="ccb coatings" />
        </div>
        <SectionAbout>
          <ContainerAbout>

            <WrapperAbout ref={wrapper}>

              <InfoAbout>
                <h3>{t('textWhoWeAre')}</h3>
                <p>{t('textContent')}</p>
              </InfoAbout>

              <InfoImage src={infoImage} alt="ccb coatings" />

            </WrapperAbout>

          </ContainerAbout>

          <BgImage />

        </SectionAbout>

        <FooterContact />
      </WrapperAllContent>
    </Container>
  );
}

export default About;