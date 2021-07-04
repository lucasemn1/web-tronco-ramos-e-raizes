import { HTMLAttributes, Attributes } from "react";

import Link from "next/link";

import styles from "./style.module.scss";

interface IExhibitionCardProps extends HTMLAttributes<Attributes> {
  pathToExhibition: string;
}

export default function ExhibitionCard(props: IExhibitionCardProps) {
  const { pathToExhibition } = props;

  return (
    <div>
      <Link href={pathToExhibition}>
        <div className={styles.card}>
          <div
            className={styles.cardMainContent}
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/ca/4b/91/ca4b9102f39d3b1cfa1756f93ad175c7.jpg")',
            }}
          >
            <div
              className={styles.information}
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%)`,
              }}
            >
              <h1 className={styles.title}>Lorem Ipsum</h1>
              <p className={styles.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquid vel quibusdam
                eius assumenda?
              </p>
            </div>
          </div>
          <div className={styles.dateAndView}>
            <b>04 de mai. de 2021</b>
            <p>
              <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
              180
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
