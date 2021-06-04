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

export default function Home(): JSX.Element {
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
          <div className={styles.exhibitionArea}>
            <ExhibitionCard />
            <ExhibitionCard />
            <ExhibitionCard />
            <ExhibitionCard />
            <ExhibitionCard />
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

        <section className={`content ${styles.galeryArea}`}>
          <h2>Galeria</h2>

          <div className={styles.galeryGrid}>
            <ImageWrapper
              className={styles.firstImageWrapper}
              alt="Teste"
              imageUrl="https://media.gettyimages.com/photos/indigenous-brazilian-child-portrait-from-tupi-guarani-ethnicity-picture-id1018492986?s=612x612"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://media.gettyimages.com/photos/indigenous-brazilian-child-portrait-from-tupi-guarani-ethnicity-picture-id1018492986?s=612x612"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://media.gettyimages.com/photos/indigenous-brazilian-child-portrait-from-tupi-guarani-ethnicity-picture-id1018492986?s=612x612"
            />

            <ImageWrapper
              className={styles.fourthImageWrapper}
              alt="Teste"
              imageUrl="https://media.gettyimages.com/photos/indigenous-brazilian-child-portrait-from-tupi-guarani-ethnicity-picture-id1018492986?s=612x612"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://media.gettyimages.com/photos/indigenous-brazilian-child-portrait-from-tupi-guarani-ethnicity-picture-id1018492986?s=612x612"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://media.gettyimages.com/photos/indigenous-brazilian-child-portrait-from-tupi-guarani-ethnicity-picture-id1018492986?s=612x612"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://media.gettyimages.com/photos/indigenous-brazilian-child-portrait-from-tupi-guarani-ethnicity-picture-id1018492986?s=612x612"
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
