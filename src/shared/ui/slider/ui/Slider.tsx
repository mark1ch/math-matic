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
        <img src={img[numImg]} alt="photo" />
      </div>
      <button className={styles.slider__arrow_right} onClick={changeRightImg}>
        <img src="assets/icon/icon-caret-down.svg" alt="arrow-right" />
      </button>
    </div>
  );
}
