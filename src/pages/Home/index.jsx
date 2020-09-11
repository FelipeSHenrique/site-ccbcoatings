import React, { useRef, useEffect } from 'react';

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
  GradientHorizontalBg
} from './styled';

import ButtonMore from '../../components/ButtonMore';
import Titles from '../../components/Titles';
import Menu from '../../components/Menu';
import CardHome from '../../components/CardHome';

import iconWB from '../../assets/image/icons/WB.png';
import iconUV from '../../assets/image/icons/UV.png';
import iconPU from '../../assets/image/icons/pu.png';
import iconPisos from '../../assets/image/icons/pisos.png';
import iconResinas from '../../assets/image/icons/RESINA.png';
import iconTingidores from '../../assets/image/icons/TINGIDOR.png';
import iconTec from '../../assets/image/icons/tec.png';
import iconQuality from '../../assets/image/icons/quality.png';

function Home() {

  const titulo = useRef(null);

  // useEffect(() => {

  //   var words = ['revestimentos', 'tecnologia', 'eficiência', 'qualidade', 'sustentabilidade'];
  //   var indexWord = 0;
  //   var indexChar = 0;

  //   function run() {
  //     setInterval(() => {
  //       let teste1 = titulo.current;
  //       console.log(teste1)
  //       if (teste1 === null) {
  //         teste1.innerText = "padrão";
  //       }
  //       if (indexChar < words[indexWord].length) {
  //         indexChar++;
  //         teste1.innerText = words[indexWord].substr(0, indexChar);
  //       } else if (indexWord < words.length - 1) {
  //         indexWord++; indexChar = 0;
  //       } else {
  //         indexWord = 0; indexChar = 0;
  //       }
  //     }, 200);
  //   }

  //   run();

  // }, []);

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
        <a href="/produtos">VER MAIS PRODUTOS</a>
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

    </Container>
  );
}

export default Home; 