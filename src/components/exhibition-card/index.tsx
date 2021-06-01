import styles from "./style.module.scss";

export default function ExhibitionCard() {
  return (
    <div className={styles.card}>
      <div className={styles.information}>
        <h1 className={styles.title}>Lorem Ipsum</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquid vel quibusdam eius
          assumenda?
        </p>
      </div>
      <div className={styles.dateAndView}>
        <p>04 de mai. de 2021</p>
        <p>
          <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
          180
        </p>
      </div>
    </div>
  );
}
