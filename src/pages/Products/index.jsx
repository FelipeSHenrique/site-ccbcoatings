import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';

import {
  Container,
  WrapperAllContent,
  Cards,
  SectionProducts
} from './styled';

import baldeTeste from '../../assets/image/balde-tinta.jpg';

import Menu from '../../components/Menu';
import CardProducts from '../../components/CardProducts';
import Titles from '../../components/Titles';
import HeaderLogo from '../../components/HeaderLogo';
import FooterContact from '../../components/FooterContact';

function Products() {

  const { t } = useTranslation();

  const allCards = useRef(null);
  const title = useRef(null);

  useEffect(() => {

    gsap.from(title.current, { x: -300, stagger: .6, opacity: 0 });
    gsap.from(allCards.current, { x: -300, opacity: 0, duration: .5 });

  }, []);

  return (
    <Container>
      <HeaderLogo />
      <Menu />
      <WrapperAllContent>
        <SectionProducts>
          <div>
            <Titles title={t('textTitleProducts')} subTitle="ccb coatings" />
          </div>
          <Cards ref={allCards}>
            <CardProducts icon={baldeTeste} title={t('textCardFlooringLine')} list={t('textCardItemFlooringLine', { returnObjects: true })} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

            <CardProducts icon={baldeTeste} title={t('textCardWb')} list={t('textCardItemWb', { returnObjects: true })} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

            <CardProducts icon={baldeTeste} title={t('textCardDyeing')} list={t('textCardItemDyeing', { returnObjects: true })} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

            <CardProducts icon={baldeTeste} title={t('textCardUv')} list={t('textCardItemUv', { returnObjects: true })} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

            <CardProducts icon={baldeTeste} title={t('textCardResin')} list={t('textCardItemResin', { returnObjects: true })} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

            <CardProducts icon={baldeTeste} title={t('textCardPu')} list={t('textCardItemPu', { returnObjects: true })} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

            <CardProducts icon={baldeTeste} title={t('textCardGlassingLine')} list={[]} info="A linha pisos contém tecnologia canadence e diferencial nos seus acabamentos de alta resistencia, especializada em tintas e vernizes para madeira." />

          </Cards>
        </SectionProducts>
        <footer>
          <div className="gradiente">
            <h1>{t('textMessageProducts')}</h1>
            <FooterContact />
          </div>
        </footer>
      </WrapperAllContent>
    </Container>
  );
}

export default Products;