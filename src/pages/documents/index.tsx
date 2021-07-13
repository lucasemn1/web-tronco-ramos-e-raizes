import Head from "next/head";
import { useEffect, useState } from "react";

// Components
import InputField from "../../components/input-field";
import Paginator from "../../components/paginator";

// Interfaces:
import Document from "../../interfaces/entities/Document";

// Services:
import DocumentService from "../../services/rest/DocumentService";

export default function Documents() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const documentService = new DocumentService("documents");

  useEffect(() => {
    async function loadDocuments() {
      console.log(await (await documentService.getAll()).data.results);
    }

    loadDocuments();
  }, []);

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

            <tbody>
              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>

              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>

              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>

              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>

              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>
              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>

              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>

              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>

              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>

              <tr>
                <td>What is Lorem Ipsum?</td>
                <td>PDF</td>
                <td>2 MB</td>
                <td>22 de abril de 2021</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Paginator className="paginator" />
      </section>
    </div>
  );
}
