import { cn, useModal } from "shared/lib";
import styles from "./Logo.module.scss";
import { UIModal } from "shared/ui";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
        <div>
          <Carousel
            centerMode
            centerSlidePercentage={100}
            showStatus={false}
            infiniteLoop={true}
            swipeScrollTolerance={30}
            showThumbs={false}
          >
            <picture>
              <source
                srcSet={`assets/slider-nav/1-480.jpg 480w, assets/slider-nav/1-780.jpg 960w, assets/slider-nav/1-1080.jpg 1920w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
              />
              <img src="assets/slider-nav/2.jpg" alt="photo" />
            </picture>
            <picture>
              <source
                srcSet={`assets/slider-nav/2-480.jpg 480w, assets/slider-nav/2-780.jpg 960w, assets/slider-nav/2-1080.jpg 1920w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
              />
              <img src="assets/slider-nav/2.jpg" alt="photo" />
            </picture>
            <picture>
              <source
                srcSet={`assets/slider-nav/3-480.jpg 480w, assets/slider-nav/3-780.jpg 960w, assets/slider-nav/4-1080.jpg 1920w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
              />
              <img src="assets/slider-nav/2.jpg" alt="photo" />
            </picture>
            <picture>
              <source
                srcSet={`assets/slider-nav/5-480.jpg 480w, assets/slider-nav/5-780.jpg 960w, assets/slider-nav/5-1080.jpg 1920w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
              />
              <img src="assets/slider-nav/2.jpg" alt="photo" />
            </picture>
            <picture>
              <source
                srcSet={`assets/slider-nav/6-480.jpg 480w, assets/slider-nav/6-780.jpg 960w, assets/slider-nav/6-1080.jpg 1920w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
              />
              <img src="assets/slider-nav/2.jpg" alt="photo" />
            </picture>
          </Carousel>
        </div>
      </UIModal>
    </>
  );
}
