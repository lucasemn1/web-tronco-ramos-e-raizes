import { useEffect, useState } from "react";
import styles from "./style.module.scss";

import { generateId } from "../../utils/id";

interface Props {
  children: JSX.Element[];
  className?: string;
}

export default function HorizontalScrollItems({ children, className }: Props) {
  const [scrollItems, setScrollItems] = useState<number>(0);
  const [listWidth, setListWidth] = useState<number>(0);
  const [generatedId, setGeneratedId] = useState<string>("");

  useEffect(() => {
    setGeneratedId(generateId());
  }, []);

  useEffect(() => {
    if (document.getElementById(generatedId)) {
      const itemsAreaWidth = document.getElementById(generatedId).scrollWidth;

      setListWidth(itemsAreaWidth);
    }
  }, [children, generatedId]);

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
      <div className={styles.itemsArea} id={generatedId}>
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
