import { useState } from "react";
import styles from "./style.module.scss";

interface Props {
  children: any[];
  withOfOneItemInRem: number;
}

export default function HorizontalScrollItems({ children, withOfOneItemInRem }: Props) {
  const [scrollItems, setScrollItems] = useState<number>(0);

  function handleArrowLeft() {
    const numberOfItems = children.length + 1.1;
    const widthOfOneItem = withOfOneItemInRem * 16;
    const listWidth = numberOfItems * widthOfOneItem;

    let marginToScroll = scrollItems - Math.round(window.innerWidth / 2);

    console.log(window.innerWidth - listWidth > marginToScroll);

    if (window.innerWidth - listWidth > marginToScroll) {
      marginToScroll = window.innerWidth - listWidth;
    }

    setScrollItems(marginToScroll);
  }

  function handleArrowRight() {
    let marginToScroll = scrollItems + Math.round(window.innerWidth / 2);

    if (marginToScroll > 0) {
      marginToScroll = 0;
    }

    setScrollItems(marginToScroll);
  }

  return (
    <div className={styles.horizontalScrollContainer} style={{ marginLeft: scrollItems }}>
      <img
        src="/assets/icons/arrow_left.svg"
        alt="Passar exibições para esquerda"
        className={`${styles.arrowLeft} ${styles.arrowIcon}`}
        onClick={handleArrowRight}
        onKeyDown={handleArrowRight}
      />
      <div className={styles.itemsArea}>{children}</div>
      <img
        src="/assets/icons/arrow_left.svg"
        alt="Passar exibições para direita"
        className={`${styles.arrowRight} ${styles.arrowIcon}`}
        onClick={handleArrowLeft}
        onKeyDown={handleArrowLeft}
      />
    </div>
  );
}