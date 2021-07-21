import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

// Components
import InputField from "../../components/input-field";
import Paginator from "../../components/paginator";

// Interfaces:
import Document from "../../interfaces/entities/Document";

// Services:
import DocumentService from "../../services/rest/DocumentService";
import { getStringDateInBrasilizamFormat } from "../../utils/date";

interface Props {
  documents: Document[];
  pagesAmount: number;
}

export default function Documents({ documents, pagesAmount }: Props) {
  function renderDocuments() {
    return documents.map((document) => (
      <tr key={document.id}>
        <td>
          <Link href={document.file}>{document.title}</Link>
        </td>
        <td>
          <Link href={document.file}>PDF</Link>
        </td>
        <td>2 MB (não tem)</td>
        <td>{getStringDateInBrasilizamFormat(new Date(document.createdAt))}</td>
      </tr>
    ));
  }

  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Documentos</title>
      </Head>

      <section className="small-content content-area">
        <h1 className="title">Documentos</h1>

        <InputField placeholder="Buscar" type="text" />

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Formato</th>
                <th>Tamanho</th>
                <th>Enviado em</th>
              </tr>
            </thead>

            <tbody>{renderDocuments()}</tbody>
          </table>
        </div>

        <Paginator
          className="paginator"
          currentPage={1}
          limit={pagesAmount}
          changePage={() => console.log("")}
        />
      </section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await new DocumentService().getAll(1);

  const pages = Math.ceil(data.count / 9);
  const paths = Array.from(Array(pages).keys()).map((index: number) => ({
    params: { page: String(index + 1) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await new DocumentService().getAll(1);
  const pagesAmount = Math.ceil(data.count / 9);

  return {
    props: {
      documents: data.results,
      pagesAmount,
    },
    revalidate: Number(process.env.STATIC_PAGE_REVALIDATE_SECONDS),
  };
};
