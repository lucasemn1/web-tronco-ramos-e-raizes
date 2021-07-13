// React
import { useEffect } from "react";

// Next
import Head from "next/head";
import { GetStaticProps } from "next";

// Styles
import styles from "./style.module.scss";

// Utils
import { getStringDateInBrasilizamFormat } from "../../utils/date";

// Interfaces
import IExhibition from "../../interfaces/entities/Exhibition";
import Category from "../../interfaces/entities/Category";
import Author from "../../interfaces/entities/Author";
import ExhibitionService from "../../services/rest/ExhibitionService";

interface Props {
  exhibition: IExhibition;
  categories: Category[];
  authors: Author[];
}

export default function Exhibition({ exhibition, authors }: Props) {
  const createdAt = new Date(exhibition.createdAt);

  useEffect(() => {
    const banner = document.getElementById("banner");
    banner.style.backgroundPositionY = "38.5625rem";

    window.onscroll = () => {
      banner.style.backgroundPositionY = `${window.scrollY * 0.02 + 38.5625}rem`;
    };
  });

  function renderAuthors() {
    return authors.map((author) => (
      <div key={`author-${author.id}`} className={styles.author}>
        <img src={author.pictureUrl} alt={`Foto de perfil de ${author.name}`} />
        <span>{author.name}</span>
      </div>
    ));
  }

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
        <section className={styles.categoriesArea}>
          <h2>Categorias</h2>

          <div className={styles.categories}>
            <span>#Exemplo 1</span>
            <span>#Exemplo 2</span>
            <span>#Exemplo 3</span>
            <span>#Exemplo 4</span>
          </div>
        </section>
      </section>

      <section className={styles.authorsArea}>
        <h2>{authors.length === 1 ? "Autor" : "Autores"}</h2>

        <div className={styles.authors}>{renderAuthors()}</div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await new ExhibitionService().getOne(1);

  const authors: Author[] = [
    {
      id: 1,
      name: "Ben Affleck",
      pictureUrl:
        "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2021/05/04/1343439445-ben-affleck.jpg",
    },
    {
      id: 2,
      name: "Gal Gadot",
      pictureUrl:
        "https://img.olhardigital.com.br/wp-content/uploads/2021/04/shutterstock_1060297688-scaled.jpg",
    },
  ];

  const categories: Category[] = [];

  return {
    props: {
      exhibition: data,
      authors,
      categories,
    },
  };
};
