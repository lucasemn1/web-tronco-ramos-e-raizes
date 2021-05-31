// React
import { useEffect, useState } from "react";

// Styles
import style from "./style.module.scss";

// Jsons
import slides from "./slides.json";

interface ISlide {
  title: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState<ISlide>(slides[currentSlideIndex]);

  useEffect(() => {
    setCurrentSlide(slides[currentSlideIndex]);
  }, [currentSlideIndex]);

  setInterval(() => {
    nextSlide();
  }, 10000);

  function nextSlide() {
    if (currentSlideIndex === slides.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  function renderButtons() {
    return slides.map((slide, index) => (
      <button
        key={index}
        className={currentSlideIndex === index ? style.active : ""}
        onClick={() => setCurrentSlideIndex(index)}
      ></button>
    ));
  }

  return (
    <div className={style.container} style={{ backgroundImage: `url(${currentSlide.image.src})` }}>
      <div className={style.shadow} />
      <div className={style.contentArea}>
        <div>
          <h1>{slides[currentSlideIndex].title}</h1>
          <hr />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className={style.buttonsArea}>{renderButtons()}</div>
      </div>
    </div>
  );
}
