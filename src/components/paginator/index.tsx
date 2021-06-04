import { useState } from "react";

// Styles
import styles from "./style.module.scss";

export default function Paginator(props) {
  const [pageNumber] = useState([1, 2, 3, 4, 5]);
  const [selectedPage, setSelectedPage] = useState(1);

  function handleSelectPage(selectedPage: number) {
    const page = pageNumber.find((page) => page === selectedPage);

    setSelectedPage(page);
  }

  function renderPageNumber() {
    return pageNumber.map((number, index) => (
      <li
        key={index}
        onClick={() => handleSelectPage(number)}
        onKeyDown={() => handleSelectPage(number)}
        className={`${number === selectedPage ? styles.selectedPage : null}`}
      >
        {number}
      </li>
    ));
  }

  return (
    <div className={`${styles.container} ${props.className}`}>
      <ul className={styles.listPagesIndex}>{renderPageNumber()}</ul>
    </div>
  );
}
