// Next
import Head from "next/head";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Início</title>
      </Head>

      <h1>Página home</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
