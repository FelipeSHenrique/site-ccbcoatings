import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-marquee-slider';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Container,
  WrapperLogoHome,
  ImageLogo,
  HeaderHome,
  GradientHorizontal,
  InfoHeader,
  SectionProducts,
  Cards,
  SectionMessage,
  GradientHorizontalMessage,
  WrapperMessage,
  SectionElements,
  WrapperElements,
  SectionTecnology,
  SectionQuality,
  GradientHorizontalBg,
  SectionCompanies,
  WrapperImages,
  ImgItens,
  SectionMaps
} from './styled';

import ButtonMore from '../../components/ButtonMore';
import Titles from '../../components/Titles';
import Menu from '../../components/Menu';
import CardHome from '../../components/CardHome';
import FooterContact from '../../components/FooterContact';
import MenuMobile from '../../components/MenuMobile';

import iconWB from '../../assets/image/icons/WB.svg';
import iconUV from '../../assets/image/icons/UV.svg';
import iconPU from '../../assets/image/icons/pu.svg';
import iconTec from '../../assets/image/icons/tec.png';
import iconQuality from '../../assets/image/icons/quality.png';

import imgEucatex from '../../assets/image/logo-eucatex.svg';
import imgIndusparquet from '../../assets/image/logo-indusparquet.svg';
import imgMasterpiso from '../../assets/image/logo-masterpiso.svg';
import imgRudnick from '../../assets/image/logo-rudnick.png';
import logoCCB from '../../assets/image/logo-ccb.png';

function Home() {

  const titulo = useRef(null);
  // Ref Animation

  // Animation Section Elementos
  const sectionElement = useRef(null);
  const sectionQuali = useRef(null);
  const sectionTecn = useRef(null);
  // Animation Section Message
  const sectionMsg = useRef(null);
  const msgContent = useRef(null);
  // Animation Services
  const sectionProd = useRef(null);
  const title = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useLayoutEffect(() => {

    var words = ['revestimentos', 'tecnologia', 'eficiência', 'qualidade', 'sustentabilidade'];
    var indexWord = 0;
    var indexChar = 0;

    function run(el) {
      setInterval(() => {
        if (indexChar < words[indexWord].length) {
          indexChar++;
          el.innerText = words[indexWord].substr(0, indexChar);
        } else if (indexWord < words.length - 1) {
          indexWord++; indexChar = 0;
        } else {
          indexWord = 0; indexChar = 0;
        }
      }, 200);
    }

    if (null !== titulo.current) {
      run(titulo.current);
    }

  }, []);

  // ANIMATION


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionProd.current,
        toggleActions: "play reverse play reverse"
      }
    });
    tl.from(title.current, { y: -300, opacity: 0, duration: 1 })
      .from(card1.current, { x: -300, opacity: 0, duration: .5 })
      .from(card2.current, { y: -300, opacity: 0, duration: .5 })
      .from(card3.current, { x: 300, opacity: 0, duration: .5 });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement.current,
        toggleActions: "play reverse play reverse"
      }
    });
    tl2.from(msgContent.current, { y: 300, opacity: 0, duration: 1 })
      .from(sectionTecn.current, { x: 200, opacity: 0, duration: 1 })
      .from(sectionQuali.current, { x: -200, opacity: 0, duration: 1 });

  }, []);


  return (
    <Container>

      <WrapperLogoHome>
        <ImageLogo src={logoCCB} />
        <MenuMobile />
      </WrapperLogoHome>

      <HeaderHome>
        <GradientHorizontal>
          <InfoHeader>
            <h1 ref={titulo} >revestimentos</h1>
            <ButtonMore />
          </InfoHeader>
        </GradientHorizontal>
      </HeaderHome>

      <Menu />

      <SectionProducts ref={sectionProd}>
        <div ref={title}>
          <Titles title="o que nós fazemos" subTitle="nossos produtos" />
        </div>
        <Cards>
          <div ref={card1}>
            <CardHome icon={iconWB} title="linha base wb" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquet diam, id mollis lacus egestas et." />
          </div>
          <div ref={card2}>
            <CardHome icon={iconUV} title="linha uv" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquet diam, id mollis lacus egestas et." />
          </div>
          <div ref={card3}>
            <CardHome icon={iconPU} title="linha pu" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquet diam, id mollis lacus egestas et." />
          </div>
        </Cards>
        <Link to="/produtos">VER MAIS PRODUTOS</Link>
      </SectionProducts>

      <SectionMessage ref={sectionMsg}>

        <GradientHorizontalMessage>
          <WrapperMessage ref={msgContent}>
            <h2>perfeita</h2>
            <h3>experiência <br /> & serviço de alta qualidade</h3>
          </WrapperMessage>
        </GradientHorizontalMessage>

      </SectionMessage>

      <SectionElements ref={sectionElement}>
        <WrapperElements>

          <SectionTecnology ref={sectionTecn}>

            <div className="col-bg-title">
              <GradientHorizontalBg>
                <h2>tecnologia</h2>
              </GradientHorizontalBg>
            </div>

            <div className="col-info">
              <img src={iconTec} alt="tecnologia" />
              <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta velit in lectus faucibus varius.</p>
            </div>

          </SectionTecnology>

          <SectionQuality ref={sectionQuali}>

            <div className="col-info">
              <img src={iconQuality} alt="tecnologia" />
              <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta velit in lectus faucibus varius.</p>
            </div>

            <div className="col-bg-title">
              <GradientHorizontalBg>
                <h2>Qualidade</h2>
              </GradientHorizontalBg>
            </div>

          </SectionQuality>

        </WrapperElements>
      </SectionElements>

      <SectionCompanies>
        <WrapperImages>
          <Marquee velocity={40} minScale={0.7}>
            <ImgItens>
              <img src={imgEucatex} alt="Eucatex" />
            </ImgItens>
            <ImgItens>
              <img src={imgIndusparquet} alt="Indusparquet" />
            </ImgItens>
            <ImgItens>
              <img src={imgMasterpiso} alt="Masterpiso" />
            </ImgItens>
            <ImgItens>
              <img src={imgRudnick} alt="Rudnick" />
            </ImgItens>
          </Marquee>
        </WrapperImages>

        <FooterContact />
      </SectionCompanies>

      <SectionMaps>
        <iframe title="Endereço da CCB Coatings" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.904822449065!2d-49.083929784420064!3d-25.340974635589323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dceb82779ec4e3%3A0x1d7d3c2aa72d2423!2sRodovia%20do%20Caqui%2C%202443%20-%20Jardim%20Santa%20Angelina%2C%20Campina%20Grande%20do%20Sul%20-%20PR%2C%2083430-000!5e0!3m2!1spt-BR!2sbr!4v1599855944543!5m2!1spt-BR!2sbr" style={{ border: 0 }} aria-hidden="false" ></iframe>
      </SectionMaps>

    </Container>
  );
}

export default Home; 