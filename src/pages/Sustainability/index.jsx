import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';

import HeaderLogo from '../../components/HeaderLogo';
import Menu from '../../components/Menu';
import Titles from '../../components/Titles';
import FooterContact from '../../components/FooterContact';

import {
  Container,
  WrapperAllContent,
  SectionSustainability,
  ContainerSustainability,
  WrapperSustainability,
  InfoSustainability,
  WrapperIcon,
  IconEarth,
  BgImage
} from './styled';

function Sustainability() {

  const { t } = useTranslation();

  const title = useRef(null);
  const wrapper = useRef(null);
  const imgEarth = useRef(null);
  const infoText = useRef(null);

  useEffect(() => {

    gsap.from(title.current, { y: -100, stagger: .6, opacity: 0 });
    gsap.from(wrapper.current, { x: 300, opacity: 0, duration: .5 });
    gsap.from(imgEarth.current, { x: 300, opacity: 0, delay: .5 });
    gsap.from(infoText.current, { opacity: 0, delay: .5 });

  }, []);

  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <div ref={title}>
          <Titles title={t('textTitleSustainability')} subTitle="ccb coatings" />
        </div>

        <SectionSustainability>
          <ContainerSustainability>

            <WrapperSustainability ref={wrapper}>

              <WrapperIcon ref={imgEarth}>
                <IconEarth />
              </WrapperIcon>

              <InfoSustainability ref={infoText}>
                <p>{t('textContentSustainability1')}</p>

                <p>{t('textContentSustainability2')}</p>

                <p>{t('textContentSustainability3')}</p>

                <p>{t('textContentSustainability4')}</p>

                <p>{t('textContentSustainability5')}</p>
              </InfoSustainability>

            </WrapperSustainability>

          </ContainerSustainability>

          <BgImage />

        </SectionSustainability>

        <FooterContact />

      </WrapperAllContent>
    </Container>
  );
}

export default Sustainability;