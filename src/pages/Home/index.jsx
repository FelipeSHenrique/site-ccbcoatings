import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-marquee-slider';

import {
  Container,
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
  ImgItens
} from './styled';

import ButtonMore from '../../components/ButtonMore';
import Titles from '../../components/Titles';
import Menu from '../../components/Menu';
import CardHome from '../../components/CardHome';

import iconWB from '../../assets/image/icons/WB.png';
import iconUV from '../../assets/image/icons/UV.png';
import iconPU from '../../assets/image/icons/pu.png';
import iconTec from '../../assets/image/icons/tec.png';
import iconQuality from '../../assets/image/icons/quality.png';

import imgEucatex from '../../assets/image/logo-eucatex.svg';
import imgIndusparquet from '../../assets/image/logo-indusparquet.svg';
import imgMasterpiso from '../../assets/image/logo-masterpiso.svg';
import imgRudnick from '../../assets/image/logo-rudnick.png';

function Home() {

  const titulo = useRef(null);

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


  return (
    <Container>

      <GradientHorizontal>
        <InfoHeader>
          <h1 ref={titulo} >revestimentos</h1>
          <ButtonMore />
        </InfoHeader>
      </GradientHorizontal>

      <Menu />

      <SectionProducts>
        <Titles title="o que nós fazemos" subTitle="nossos produtos" />
        <Cards>
          <CardHome icon={iconWB} title="linha base wb" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquet diam, id mollis lacus egestas et." />
          <CardHome icon={iconUV} title="linha uv" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquet diam, id mollis lacus egestas et." />
          <CardHome icon={iconPU} title="linha pu" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquet diam, id mollis lacus egestas et." />
        </Cards>
        <Link to="/produtos">VER MAIS PRODUTOS</Link>
      </SectionProducts>

      <SectionMessage>

        <GradientHorizontalMessage>
          <WrapperMessage>
            <h2>perfeita</h2>
            <h3>experiência <br /> & serviço de alta qualidade</h3>
          </WrapperMessage>
        </GradientHorizontalMessage>

      </SectionMessage>

      <SectionElements>
        <WrapperElements>

          <SectionTecnology>

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

          <SectionQuality>

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
      </SectionCompanies>

    </Container>
  );
}

export default Home; 