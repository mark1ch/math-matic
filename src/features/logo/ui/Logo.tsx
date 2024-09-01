import { cn, useModal } from "shared/lib";
import styles from "./Logo.module.scss";
import { UIModal, UISlider } from "shared/ui";
import { useState } from "react";

const album = [
  "assets/slider-nav/1.jpg",
  "assets/slider-nav/2.jpg",
  "assets/slider-nav/3.jpg",
  "assets/slider-nav/4.jpg",
  "assets/slider-nav/5.jpg",
  "assets/slider-nav/6.jpg",
];

export function Logo() {
  const [isShow, setIsShow] = useState(false);
  const { openModal, closeModal } = useModal();

  const handleShowOpen = () => {
    openModal(setIsShow);
  };

  const handleShowClose = () => {
    closeModal(setIsShow);
  };

  return (
    <>
      <button className={cn(styles.logo)} onClick={handleShowOpen}>
        <img src="assets/logo.jpg" alt="Logo" />
      </button>
      <UIModal show={isShow} closeModal={handleShowClose} slider>
        <UISlider img={album} />
      </UIModal>
    </>
  );
}
