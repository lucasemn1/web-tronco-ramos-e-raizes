// React
import { HTMLAttributes, Attributes } from "react";

// Next
import Link from "next/link";

// Styles
import styles from "./style.module.scss";

// Interfaces
import Exhibition from "../../interfaces/entities/Exhibition";

// Utils
import { getStringDateInBrasilizamFormat } from "../../utils/date";

interface IExhibitionCardProps extends HTMLAttributes<Attributes> {
  pathToExhibition: string;
  exhibition: Exhibition;
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
              backgroundImage: `url("${props.exhibition.thumbnail}")`,
            }}
          >
            <div
              className={styles.information}
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 42.71%, #121212 100%)`,
              }}
            >
              <h1 className={styles.title}>{props.exhibition.title}</h1>
              <p className={styles.description}>{props.exhibition.legend}</p>
            </div>
          </div>
          <div className={styles.dateAndView}>
            <b>{getStringDateInBrasilizamFormat(new Date(props.exhibition.createdAt))}</b>
            <p>
              <img src="/assets/icons/views.svg" alt="Quantidade de visualizações" />
              {props.exhibition.views}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
