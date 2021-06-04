import { useEffect, useState } from "react";
import style from "./style.module.scss";

interface IProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

export default function ImageWrapper(props: IProps) {
  const { className, imageUrl, alt } = props;
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((image) => URL.createObjectURL(image))
      .then((image) => setImage(image));
  }, [imageUrl]);

  return (
    <div
      className={`${className} ${style.imageWrapper}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={style.wrapper}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}
