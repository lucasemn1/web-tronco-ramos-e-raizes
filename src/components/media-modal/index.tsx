// React
import React, { useState } from "react";
import { useEffect } from "react";

// Next
import Image from "next/image";

// Styles
import styles from "./style.module.scss";
import IImage from "../../interfaces/entities/Image";

interface Props {
  images: IImage[];
  type: "image" | "video" | "audio";
  showStatus: boolean;
  changeShowStatus(): void;
}

export default function MediaModal(props: Props) {
  const [focusedImageIndex] = useState(0);
  const [focusedImage, setFocusedImage] = useState(props.images[focusedImageIndex]);

  useEffect(() => {
    setFocusedImage(props.images[focusedImageIndex]);
  }, [focusedImageIndex, props.images]);

  function renderContent() {
    switch (props.type) {
      case "image":
        return (
          <div className={styles.mainImage}>
            <Image
              src={focusedImage.image}
              alt={focusedImage.title}
              layout="fill"
              objectFit="contain"
            />
          </div>
        );

      case "video":
        return <></>;

      case "audio":
        return <></>;

      default:
        return <></>;
    }
  }

  return (
    <section className={`${props.showStatus ? styles.mediaModal : styles.hideModal}`}>
      <button className={styles.exitButton} onClick={() => props.changeShowStatus()}>
        <Image
          src={"/assets/icons/close.svg"}
          alt="Ícone de fechar a visualização"
          width="200"
          height="200"
        />
      </button>

      {renderContent()}
    </section>
  );
}
