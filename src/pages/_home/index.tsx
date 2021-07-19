// React
import { useState } from "react";

// Next
import Head from "next/head";
import dynamic from "next/dynamic";

// Components
import Carousel from "../../components/carousel";
import ExhibitionCard from "../../components/exhibition-card";
import styles from "./style.module.scss";
import ImageWrapper from "../../components/image-wrapper";
const Map = dynamic(() => import("../../components/map"), { ssr: false });

// Interfaces
import Exhibition from "../../interfaces/entities/Exhibition";
import ImageAlbum from "../../interfaces/entities/ImageAlbum";

export interface HomeProps {
  exhibitions: Exhibition[];
  homeImageAlbum: ImageAlbum;
}

export default function Home(props: HomeProps) {
  const [scrollExhibitions, setScrollExhibitions] = useState<number>(0);

  function handleArrowLeft() {
    const numberOfExhibitionsCards = 8 + 1.2;
    const widthOfOneCard = 23.9375 * 16;
    const listWidth = numberOfExhibitionsCards * widthOfOneCard;

    let marginToScroll = scrollExhibitions - Math.round(window.innerWidth / 2);

    if (window.innerWidth - listWidth > marginToScroll) {
      marginToScroll = window.innerWidth - listWidth;
    }

    setScrollExhibitions(marginToScroll);
  }

  function handleArrowRight() {
    let marginToScroll = scrollExhibitions + Math.round(window.innerWidth / 2);

    if (marginToScroll > 0) {
      marginToScroll = 0;
    }

    setScrollExhibitions(marginToScroll);
  }

  function renderExhibitions() {
    return props.exhibitions.map((exhibition) => {
      return (
        <ExhibitionCard
          key={exhibition.id}
          pathToExhibition={`/exhibition/${exhibition.id}`}
          exhibition={exhibition}
        />
      );
    });
  }

  function renderGalery() {
    return props.homeImageAlbum.images.map((image, index) => {
      switch (index) {
        case 0:
          return (
            <ImageWrapper
              className={styles.firstImageWrapper}
              alt={image.title}
              imageUrl={image.image}
            />
          );

        case 3:
          return (
            <ImageWrapper
              className={styles.fourthImageWrapper}
              alt={image.title}
              imageUrl={image.image}
            />
          );

        default:
          return <ImageWrapper alt={image.title} imageUrl={image.image} />;
      }
    });
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
            <div className={styles.exhibitionArea}>{renderExhibitions()}</div>
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

          <Map
            markers={[
              {
                title: "Hello World",
                accessUrl: "#",
                lat: -6.6917981,
                long: -36.6470937,
              },
              {
                title: "Hello World 2",
                accessUrl: "#",
                lat: -5.797058,
                long: -36.4469677,
              },
            ]}
          />
        </section>

        <section className={`content ${styles.galleryArea}`}>
          <h2>Galeria</h2>

          <div className={styles.galleryGrid}>{renderGalery()}</div>
        </section>
      </main>
    </div>
  );
}
