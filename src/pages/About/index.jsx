import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const title = useRef(null);
  const wrapper = useRef(null);
  const titleAbout = useRef(null);
  const infoAbout = useRef(null);
  const imageInfo = useRef(null);
  const backgroundFound = useRef(null);

  useEffect(() => {

    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(title.current, { y: -100, stagger: .6, opacity: 0 })
      .from(backgroundFound.current, { backgroundPosition: '300px', opacity: 0 })
      .from(wrapper.current, { x: 300, opacity: 0, duration: .5 })
      .from(titleAbout.current, { y: -100, stagger: .6, opacity: 0 })
      .from(infoAbout.current, { y: 300, opacity: 0, duration: .3 })
      .from(imageInfo.current, { y: 30, opacity: 0 }, "-=.5");

  }, []);

  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <div ref={title}>
          <Titles title="sobre nós" subTitle="ccb coatings" />
        </div>
        <SectionAbout>
          <ContainerAbout>

            <WrapperAbout ref={wrapper}>

              <InfoAbout>
                <h3 ref={titleAbout}>quem somos</h3>
                <p ref={infoAbout}>Há 30 anos a CCB Coatings uma das tops teen no mercado com tecnologia e soluções inovadoras no fornecimento de revestimentos em vernizes e tintas, para a indústria de móveis, pisos in wood, e em substratos diversos.
                Não apenas dispomos da melhor tecnologia em nossos produtos, mas também as melhores soluções em aplicação, logística e suporte técnico.</p>
              </InfoAbout>

              <InfoImage ref={imageInfo} src={infoImage} alt="ccb coatings" />

            </WrapperAbout>

          </ContainerAbout>

          <BgImage ref={backgroundFound} />

        </SectionAbout>

        <FooterContact />
      </WrapperAllContent>
    </Container>
  );
}

export default About;