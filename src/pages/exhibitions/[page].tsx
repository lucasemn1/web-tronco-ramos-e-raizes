// React
import React, { useState } from "react";

// Next
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

// Components
import InputField from "../../components/input-field";
import Paginator from "../../components/paginator";

// Services
import ExhibitionService from "../../services/rest/ExhibitionService";

// Interfaces
import IExhibition from "../../interfaces/entities/Exhibition";
import { ParsedUrlQuery } from "querystring";

// Styles
import styles from "./styles.module.scss";

// Utils
import { getStringDateInBrasilizamFormat } from "../../utils/date";

interface Props {
  exhibitions: IExhibition[];
  pagesAmount: number;
}

export default function Exhibition(props: Props) {
  const [search, setSearch] = useState("");
  const [exhibitions] = useState<IExhibition[]>([]);
  const [page, setPage] = useState(0);

  function handleChangePage(fromPage: number) {
    setPage(fromPage);
  }

  function mountExhibition(exhibition: IExhibition) {
    return (
      <div key={exhibition.id} className={styles.exhibitionThumb}>
        <div
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%), url("${exhibition.thumbnail}"), #000000`,
          }}
        >
          <h3 className={styles.title}>{exhibition.title}</h3>
        </div>

        <div className={styles.description}>
          <p>{exhibition.legend}</p>
        </div>

        <div className={styles.dateAndView}>
          <p>{getStringDateInBrasilizamFormat(new Date(exhibition.createdAt))}</p>

          <p>
            <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
            180
          </p>
        </div>
      </div>
    );
  }

  function renderExhibitions() {
    if (search === "") {
      return props.exhibitions.map(mountExhibition);
    } else {
      return exhibitions.map(mountExhibition);
    }
  }

  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Exibições</title>
      </Head>

      <section className="small-content content-area">
        <h1 className="title">Exposições</h1>

        <InputField
          placeholder="Buscar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className={styles.exhibitionArea}>{renderExhibitions()}</div>

        <Paginator
          className="paginator"
          currentPage={page}
          limit={props.pagesAmount}
          changePage={handleChangePage}
        />
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await new ExhibitionService().getAll(1);

  const pages = Math.ceil(data.count / 9);
  const paths = Array.from(Array(pages).keys()).map((index: number) => ({
    params: { page: String(index + 1) },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }: { params: Params }) => {
  const { data } = await new ExhibitionService().getAll(Number(params.id));
  const pagesAmount = Math.ceil(data.count / 9);

  return {
    props: {
      exhibitions: data.results,
      pagesAmount,
    },
    revalidate: Number(process.env.STATIC_PAGE_REVALIDATE_SECONDS),
  };
};
