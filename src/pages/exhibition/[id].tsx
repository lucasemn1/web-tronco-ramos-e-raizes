// React
import { useState } from "react";

// Next
import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

// Styles
import styles from "./style.module.scss";

// Utils
import { getStringDateInBrasilizamFormat } from "../../utils/date";

// Components
import MediaModal from "../../components/media-modal";

// Interfaces
import IExhibition from "../../interfaces/entities/Exhibition";
import ExhibitionService from "../../services/rest/ExhibitionService";

interface Props {
  exhibition: IExhibition;
}

export default function Exhibition({ exhibition }: Props) {
  const [showImages, setShowImages] = useState(false);
  const createdAt = new Date(exhibition.createdAt);

  function renderAuthors() {
    return exhibition.users.map((author) => (
      <div key={`author-${author.id}`} className={styles.author}>
        <img src={author.image_profile} alt={`Foto de perfil de ${author.name}`} />
        <span>{author.name}</span>
      </div>
    ));
  }

  function renderCategories() {
    return exhibition.tags.map((tag) => {
      return <span key={`exhibition-${tag.id}`}>#{tag.title}</span>;
    });
  }

  function renderMediaBlocks() {
    const blocks = [];

    if (exhibition.albumImage) {
      blocks.push(
        <button key="image-block" onClick={() => setShowImages(true)}>
          <img src="/assets/icons/image.svg" alt="Imagens" />
          <h3>
            {exhibition.albumImage.images.length}{" "}
            {exhibition.albumImage.images.length === 1 ? "imagem" : "imagens"}
          </h3>
        </button>
      );
    }

    if (exhibition.albumAudio) {
      blocks.push(
        <button key={`audio-block`}>
          <img src="/assets/icons/play_circle_filled.svg" alt="Matéria em áudio" />
          <h3>Matéria em áudio</h3>
        </button>
      );
    }

    if (exhibition.albumVideo) {
      blocks.push(
        <button key={`video-block`}>
          <img src="/assets/icons/video_library.svg" alt="Vídeos" />
          <h3>Vídeos</h3>
        </button>
      );
    }

    return blocks;
  }

  return (
    <>
      <MediaModal
        images={exhibition.albumImage.images}
        type="image"
        showStatus={showImages}
        changeShowStatus={() => setShowImages(!showImages)}
      />

      <Head>
        <title>{exhibition.title} | Museu Tronco, Ramos e Raízes</title>
      </Head>

      <Image
        src={exhibition.thumbnail}
        alt={`Imagem banner da exposição ${exhibition.title}`}
        objectFit="cover"
        width={500}
        height={200}
        layout="responsive"
        className={styles.banner}
      />

      <section className={`small-content ${styles.content}`}>
        <h1>{exhibition.title}</h1>
        <time>{getStringDateInBrasilizamFormat(createdAt)}</time>
        <hr />
        <div
          className={styles.textContent}
          dangerouslySetInnerHTML={{ __html: exhibition.content }}
        />
        <div className={`${styles.mediaGrid}`}>{renderMediaBlocks()}</div>
        <section className={styles.categoriesArea}>
          <h2>Categorias</h2>

          <div className={styles.categories}>{renderCategories()}</div>
        </section>
      </section>

      <section className={styles.authorsArea}>
        <h2>{exhibition.users.length === 1 ? "Autor" : "Autores"}</h2>

        <div className={styles.authors}>{renderAuthors()}</div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  let currentPage = 1;
  let nextPage = null;

  do {
    const { data } = await new ExhibitionService().getAll(currentPage);

    paths = [
      ...paths,
      ...data.results
        .filter(({ isPublic }) => isPublic === "PUBLICAR")
        .map(({ id }) => ({
          params: { id: String(id) },
        })),
    ];

    nextPage = data.next;
    currentPage++;
  } while (nextPage !== null);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const params = context.params;
  const { data } = await new ExhibitionService().getOne(Number(params.id));
  const exhibition = data;

  return {
    props: {
      exhibition,
      authors: [],
      categories: [],
    },
    revalidate: 24 * 60 * 60,
  };
};
