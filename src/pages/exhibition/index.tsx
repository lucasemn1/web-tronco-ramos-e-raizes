// React
import { useEffect } from "react";

// Next
import Head from "next/head";
import { GetStaticProps } from "next";

// Styles
import styles from "./style.module.scss";

// Utils
import { getStringDateInBrasilizamFormat } from "../../utils/date";

interface IExhibition {
  title: string;
  content: string;
  createdAt: number;
}

interface IProps {
  exhibition: IExhibition;
}

export default function Exhibition({ exhibition }: IProps) {
  const createdAt = new Date(exhibition.createdAt);

  useEffect(() => {
    const banner = document.getElementById("banner");
    banner.style.backgroundPositionY = "38.5625rem";

    window.onscroll = () => {
      banner.style.backgroundPositionY = `${window.scrollY * 0.02 + 38.5625}rem`;
    };
  });

  return (
    <>
      <Head>
        <title>{exhibition.title} | Museu Tronco, Ramos e Raízes</title>
      </Head>

      <div
        id="banner"
        className={styles.banner}
        style={{
          backgroundImage: `url('https://www.somosiberoamerica.org/wp-content/uploads/2019/12/Pueblos-Indigenas_974px.jpg')`,
        }}
      ></div>

      <section className={`small-content ${styles.content}`}>
        <h1>{exhibition.title}</h1>
        <time>{getStringDateInBrasilizamFormat(createdAt)}</time>
        <hr />

        <div
          className={styles.textContent}
          dangerouslySetInnerHTML={{ __html: exhibition.content }}
        />

        <div className={`${styles.mediaGrid}`}>
          <div>
            <img src="/assets/icons/play_circle_filled.svg" alt="Matéria em áudio" />
            <h3>Matéria em áudio</h3>
          </div>
          <div>
            <img src="/assets/icons/video_library.svg" alt="Vídeos" />
            <h3>Vídeos</h3>
          </div>
          <div>
            <img src="/assets/icons/file_copy.svg" alt="Documentos" />
            <h3>Documentos</h3>
          </div>
          <div>
            <img src="/assets/icons/image.svg" alt="Imagens" />
            <h3>10 Imagens</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  return {
    props: {
      exhibition: {
        title: "Lorem Impsu",
        createdAt: Date.now(),
        content: `
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at laboriosam.
              Facilis quae blanditiis dolor quidem et nisi sequi, exercitationem ipsam unde id enim
              possimus explicabo facere quia maiores totam? <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at laboriosam.
              Facilis quae blanditiis dolor quidem et nisi sequi, exercitationem ipsam unde id enim
              possimus explicabo facere quia maiores totam? <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at laboriosam.
              Facilis quae blanditiis dolor quidem et nisi sequi, exercitationem ipsam unde id enim
              possimus explicabo facere quia maiores totam?
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at laboriosam.
              Facilis quae blanditiis dolor quidem et nisi sequi, exercitationem ipsam unde id enim
              possimus explicabo facere quia maiores totam? <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at laboriosam.
              Facilis quae blanditiis dolor quidem et nisi sequi, exercitationem ipsam unde id enim
              possimus explicabo facere quia maiores totam? <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at laboriosam.
              Facilis quae blanditiis dolor quidem et nisi sequi, exercitationem ipsam unde id enim
              possimus explicabo facere quia maiores totam?
            </p>
          `,
      },
    },
  };
};
