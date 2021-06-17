// Next
import Head from "next/head";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";

const Map = dynamic(
  () => import("../../components/map"), // replace '@components/map' with your component's location
  { ssr: false }
);

// Components
import Carousel from "../../components/carousel";
import ExhibitionCard from "../../components/exhibition-card";
import styles from "./style.module.scss";
import ImageWrapper from "../../components/image-wrapper";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [scrollExhibitions, setScrollExhibitions] = useState<number>(0);

  function handleArrowLeft() {
    const numberOfExhibitionsCards = 8 + 1.2;
    const widthOfOneCard = 23.9375 * 16;
    const listWidth = numberOfExhibitionsCards * widthOfOneCard;

    let x = scrollExhibitions - Math.round(window.innerWidth / 2);

    console.log(window.innerWidth - listWidth, x);

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth;
    }
    setScrollExhibitions(x);
  }

  function handleArrowRight() {
    let x = scrollExhibitions + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollExhibitions(x);
  }

  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Início</title>
      </Head>
      <Carousel />

      <main>
        <section className={styles.recentExhibitions}>
          <div className="content">
            <h2>EXPOSIÇÕES MAIS RECENTES</h2>
          </div>
          <div className={styles.exhibitionContainer} style={{ marginLeft: scrollExhibitions }}>
            <img
              src="/assets/icons/arrow_left.svg"
              alt="Passar exibições para esquerda"
              className={`${styles.arrowLeft} ${styles.arrowIcon}`}
              onClick={handleArrowRight}
              onKeyDown={handleArrowRight}
            />
            <div className={styles.exhibitionArea}>
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
              <ExhibitionCard pathToExhibition="/exhibition" />
            </div>
            <img
              src="/assets/icons/arrow_left.svg"
              alt="Passar exibições para direita"
              className={`${styles.arrowRight} ${styles.arrowIcon}`}
              onClick={handleArrowLeft}
              onKeyDown={handleArrowLeft}
            />
          </div>
        </section>

        <section className={`content ${styles.logoArea}`}>
          <img src="/assets/img/expanded_logo.png" alt="Logo do museu" />
        </section>

        <section>
          <div className="content">
            <h2>Mapa de exposições</h2>
          </div>

          <Map />
        </section>

        <section className={`content ${styles.galleryArea}`}>
          <h2>Galeria</h2>

          <div className={styles.galleryGrid}>
            <ImageWrapper
              className={styles.firstImageWrapper}
              alt="Teste"
              imageUrl="https://lh3.googleusercontent.com/proxy/_StkkYasiEmrJu39iBOnzjC5xhjzdAQ78TbOid8yvMD9ND_j8C8dMwe0mZRh2vgoD1-4iTEVUZazkkJv8WbnRTmpuSZQ15X_PX94GS_spemhGC4Lqfvnq49eQ_nqQo1iPG28vsXagQes1dKwGgTBO_cKmGgDVzFLyU85ji02ZDo46leaYYSJ96DoIT1F3uEnrg"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://s2.glbimg.com/19Tl8ZnLUCgL-4krvT3m52Y-tjc=/0x0:3597x2394/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2019/A/B/CKLlfjSXAxhsKv6uEzSA/img-7082.jpg"
            />

            <ImageWrapper
              className={styles.fourthImageWrapper}
              alt="Teste"
              imageUrl="https://lh3.googleusercontent.com/proxy/CgLFHgkz9jxpj8rDD5otgNgQjas5pQwdlACuHJPDlOkMekamP13tlEUU7qGxcJfvnKbrP0LEtgGMT0U0QBhts0VK8n0w68p1wMAq5relue7-_2lPP5WyxFzXU5BrlYr3TCFs9J0riGoJV7HF6gL2YlL9M76Vuq14RUG12NfYZhagO-FO0cI42RmBJ_FQvw"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://media.gettyimages.com/photos/indigenous-brazilian-child-portrait-from-tupi-guarani-ethnicity-picture-id1018492986?s=612x612"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://lh3.googleusercontent.com/proxy/9yI_fRuWFCmgsMxx7SIzTZEkPgSbVfsBz7wxL8mU4msZUKUb5lSXHEfig2INJZOrYGwL2nOglwfbTiC0Sf3l7Q-uYgfA8tqoBgMrqzK8c-ETmipzITLvlXAc51pMVgT_XQ"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/ibge/2018_12/povos-tradicionais_home2.jpg"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
