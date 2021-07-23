// Next
import Head from "next/head";
import dynamic from "next/dynamic";

// Components
import Carousel from "../../components/carousel";
import ExhibitionCard from "../../components/exhibition-card";
import styles from "./style.module.scss";
import ImageWrapper from "../../components/image-wrapper";
import HorizontalScrollItems from "../../components/horizontal-scroll-items";
const Map = dynamic(() => import("../../components/map"), { ssr: false });

// Interfaces
import Exhibition from "../../interfaces/entities/Exhibition";
import ImageAlbum from "../../interfaces/entities/ImageAlbum";

export interface HomeProps {
  exhibitions: Exhibition[];
  homeImageAlbum: ImageAlbum;
}

export default function Home(props: HomeProps) {
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

  function renderGallery() {
    return props.homeImageAlbum.images.map((image, index) => {
      switch (index) {
        case 0:
          return (
            <ImageWrapper
              key={image.id}
              className={styles.firstImageWrapper}
              alt={image.title}
              imageUrl={image.image}
            />
          );

        case 3:
          return (
            <ImageWrapper
              key={image.id}
              className={styles.fourthImageWrapper}
              alt={image.title}
              imageUrl={image.image}
            />
          );

        default:
          return <ImageWrapper alt={image.title} imageUrl={image.image} key={image.id} />;
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

          <HorizontalScrollItems>{renderExhibitions()}</HorizontalScrollItems>
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

          <div className={styles.galleryGrid}>{renderGallery()}</div>
        </section>
      </main>
    </div>
  );
}
