// React
import { useState } from "react";

// Styles
import styles from "./style.module.scss";

interface IPaginatorProps {
  className: string;
  limit: number;
  currentPage: number;
  changePage(page: number): void;
}

export default function Paginator(props: IPaginatorProps) {
  const [selectedPage, setSelectedPage] = useState(1);

  function handleSelectPage(page: number) {
    props.changePage(page);
    setSelectedPage(page);
  }

  function renderPageNumber() {
    return Array.from(Array(props.limit).keys()).map((index: number) => (
      <li
        key={index}
        onClick={() => handleSelectPage(index)}
        onKeyDown={() => handleSelectPage(index)}
        className={`${index + 1 === selectedPage ? styles.selectedPage : null}`}
      >
        {index + 1}
      </li>
    ));
  }

  return (
    <div className={`${styles.container} ${props.className}`}>
      <ul className={styles.listPagesIndex}>{renderPageNumber()}</ul>
    </div>
  );
}
