// Next
import Head from "next/head";
import { GetStaticProps } from "next";

// Components
import Carousel from "../../components/carousel";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Início</title>
      </Head>

      <Carousel />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
