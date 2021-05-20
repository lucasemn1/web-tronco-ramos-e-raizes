// Next
import Head from "next/head";
import { GetStaticProps } from "next";
import InputField from "../../components/input-field";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Início</title>
      </Head>

      <h1>Página home</h1>

      <InputField type="text" placeholder="Email" required />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
