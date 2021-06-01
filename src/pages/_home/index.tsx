// Next
import Head from "next/head";
import { GetStaticProps } from "next";

// Components
import Carousel from "../../components/carousel";
import ExhibitionCard from "../../components/exhibition-card";

import styles from "./style.module.scss";

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
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
