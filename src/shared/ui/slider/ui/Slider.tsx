import { useState } from "react";
import styles from "./Slider.module.scss";
import { UISliderProps } from "shared/ui/types";

export function UISlider({ img }: UISliderProps) {
  const [numImg, setNumImg] = useState(0);

  const changeLeftImg = () => {
    if (numImg === 0) return;
    setNumImg((prev) => --prev);
  };

  const changeRightImg = () => {
    if (numImg === img.length - 1) return;
    setNumImg((prev) => ++prev);
  };

  return (
    <div className={styles.slider}>
      <button className={styles.slider__arrow_left} onClick={changeLeftImg}>
        <img src="assets/icon/icon-caret-down.svg" alt="arrow-left" />
      </button>
      <div>
        <picture>
          <source
            srcSet={`assets/slider-nav/${img[numImg]}-480.jpg 480w, assets/slider-nav/${img[numImg]}-780.jpg 960w, assets/slider-nav/${img[numImg]}-1080.jpg 1920w`}
            sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
          />
          <img src="assets/slider-nav/2.jpg" alt="photo" />
        </picture>
      </div>
      <button className={styles.slider__arrow_right} onClick={changeRightImg}>
        <img src="assets/icon/icon-caret-down.svg" alt="arrow-right" />
      </button>
    </div>
  );
}
