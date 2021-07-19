// Next
import Head from "next/head";
import { GetStaticProps } from "next";

// Components
import InputField from "../../components/input-field";
import Paginator from "../../components/paginator";

// Services
import ExhibitionService from "../../services/rest/ExhibitionService";

// Interfaces
import Exhibition from "../../interfaces/entities/Exhibition";

// Styles
import styles from "./styles.module.scss";

interface Props {
  exhibitions: Exhibition[];
}

export default function Exhibition() {
  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Exibições</title>
      </Head>

      <section className="small-content content-area">
        <h1 className="title">Exposições</h1>

        <InputField placeholder="Buscar" type="text" />

        <div className={styles.exhibitionArea}>
          <div className={styles.exhibitionThumb}>
            <div
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%), url("https://i.pinimg.com/originals/ca/4b/91/ca4b9102f39d3b1cfa1756f93ad175c7.jpg"), #000000`,
              }}
            >
              <h3 className={styles.title}>Lorem Impsu</h3>
            </div>

            <div className={styles.description}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className={styles.dateAndView}>
              <p>04 de mai. de 2021</p>

              <p>
                <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
                180
              </p>
            </div>
          </div>

          <div className={styles.exhibitionThumb}>
            <div
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%), url("https://i.pinimg.com/originals/ca/4b/91/ca4b9102f39d3b1cfa1756f93ad175c7.jpg"), #000000`,
              }}
            >
              <h3 className={styles.title}>Lorem Impsu</h3>
            </div>

            <div className={styles.description}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className={styles.dateAndView}>
              <p>04 de mai. de 2021</p>

              <p>
                <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
                180
              </p>
            </div>
          </div>

          <div className={styles.exhibitionThumb}>
            <div
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%), url("https://i.pinimg.com/originals/ca/4b/91/ca4b9102f39d3b1cfa1756f93ad175c7.jpg"), #000000`,
              }}
            >
              <h3 className={styles.title}>Lorem Impsu</h3>
            </div>

            <div className={styles.description}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className={styles.dateAndView}>
              <p>04 de mai. de 2021</p>

              <p>
                <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
                180
              </p>
            </div>
          </div>

          <div className={styles.exhibitionThumb}>
            <div
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%), url("https://i.pinimg.com/originals/ca/4b/91/ca4b9102f39d3b1cfa1756f93ad175c7.jpg"), #000000`,
              }}
            >
              <h3 className={styles.title}>Lorem Impsu</h3>
            </div>

            <div className={styles.description}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className={styles.dateAndView}>
              <p>04 de mai. de 2021</p>

              <p>
                <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
                180
              </p>
            </div>
          </div>

          <div className={styles.exhibitionThumb}>
            <div
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%), url("https://i.pinimg.com/originals/ca/4b/91/ca4b9102f39d3b1cfa1756f93ad175c7.jpg"), #000000`,
              }}
            >
              <h3 className={styles.title}>Lorem Impsu</h3>
            </div>

            <div className={styles.description}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className={styles.dateAndView}>
              <p>04 de mai. de 2021</p>

              <p>
                <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
                180
              </p>
            </div>
          </div>

          <div className={styles.exhibitionThumb}>
            <div
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%), url("https://i.pinimg.com/originals/ca/4b/91/ca4b9102f39d3b1cfa1756f93ad175c7.jpg"), #000000`,
              }}
            >
              <h3 className={styles.title}>Lorem Impsu</h3>
            </div>

            <div className={styles.description}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className={styles.dateAndView}>
              <p>04 de mai. de 2021</p>

              <p>
                <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
                180
              </p>
            </div>
          </div>
        </div>

        <Paginator className="paginator" />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await new ExhibitionService().getAll(1);

  return {
    props: {
      exhibitions: data.results,
    },
    revalidate: 24 * 60 * 60,
  };
};
