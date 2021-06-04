import Head from "next/head";

// Components
import InputField from "../../components/input-field";
import Paginator from "../../components/paginator";

// Styles:
import styles from "./style.module.scss";

export default function Documents() {
  return (
    <div>
      <Head>
        <title>Museu Tronco, Ramos e Raízes | Livros</title>
      </Head>

      <section className={`small-content ${styles.booksArea}`}>
        <h1 className={styles.title}>Livros</h1>

        <InputField placeholder="Buscar" type="text" />

        <div className={styles.tableContainer}>
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
            </tbody>
          </table>
        </div>

        <Paginator className={styles.paginator} />
      </section>
    </div>
  );
}
