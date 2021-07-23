import { useEffect, useState } from "react";
import styles from "./style.module.scss";

interface Props {
  children: JSX.Element[];
  className?: string;
}

export default function HorizontalScrollItems({ children, className }: Props) {
  const [scrollItems, setScrollItems] = useState<number>(0);
  const [listWidth, setListWidth] = useState<number>(0);

  useEffect(() => {
    const itemsAreaWidth = document.getElementById("pepetin").scrollWidth;

    setListWidth(itemsAreaWidth);
  }, [children]);

  function handleArrowRight() {
    let spaceToScroll: number;

    spaceToScroll = scrollItems - Math.round(window.innerWidth / 2);

    const listEnd = window.innerWidth - listWidth;
    if (listEnd > spaceToScroll) {
      spaceToScroll = listEnd;
    }

    setScrollItems(spaceToScroll);
  }

  function handleArrowLeft() {
    let spaceToScroll = scrollItems + Math.round(window.innerWidth / 2);

    if (spaceToScroll > 0) {
      spaceToScroll = 0;
    }

    setScrollItems(spaceToScroll);
  }

  return (
    <div
      className={`${styles.horizontalScrollContainer} ${className}`}
      style={{ marginLeft: scrollItems }}
    >
      <img
        src="/assets/icons/arrow_left.svg"
        alt="Passar exibições para esquerda"
        className={`${styles.arrowLeft} ${styles.arrowIcon}`}
        onClick={handleArrowLeft}
        onKeyDown={handleArrowLeft}
      />
      <div className={styles.itemsArea} id="pepetin">
        {children}
      </div>
      <img
        src="/assets/icons/arrow_left.svg"
        alt="Passar exibições para direita"
        className={`${styles.arrowRight} ${styles.arrowIcon}`}
        onClick={handleArrowRight}
        onKeyDown={handleArrowRight}
      />
    </div>
  );
}
