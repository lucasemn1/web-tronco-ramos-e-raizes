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
            <ExhibitionCard pathToExhibition="/exhibition" />
            <ExhibitionCard pathToExhibition="/exhibition" />
            <ExhibitionCard pathToExhibition="/exhibition" />
            <ExhibitionCard pathToExhibition="/exhibition" />
            <ExhibitionCard pathToExhibition="/exhibition" />
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
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              className={styles.fourthImageWrapper}
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
            />

            <ImageWrapper
              alt="Teste"
              imageUrl="https://www.cultura.sp.gov.br/wp-content/uploads/2018/04/Capturar.png"
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
