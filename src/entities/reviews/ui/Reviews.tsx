import { UICardReview, UIHeading } from "shared/ui";
import styles from "./Reviews.module.scss";
// import { Carousel } from "@trendyol-js/react-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

const arrReviews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export function Reviews() {
  const [viewPort, setViewport] = useState(1920);

  useEffect(() => {
    setViewport(window.innerWidth);
  }, []);

  function debounce(func: () => void, wait: number) {
    let timeout: number;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }

  const handleResize = debounce(() => {
    const width = window.innerWidth;
    console.log(`Ширина окна: ${width}px`);
    if (width <= 468) {
      setViewport(468);
    }
  }, 500);

  window.addEventListener("resize", handleResize);

  return (
    <section className={styles.reviews} data-anchor="section-reviews">
      <UIHeading
        head="отзывы"
        number={4}
        title="2022 - 2024"
        cls={styles.reviews__head}
      />
      {viewPort > 1440 && (
        <div className={styles.reviews__slider}>
          <Carousel
            centerMode
            centerSlidePercentage={25}
            // infiniteLoop
            showStatus={false}
            swipeScrollTolerance={30}
            showThumbs={false}
          >
            {arrReviews.map((review) => (
              <UICardReview key={review} review={review} />
            ))}
          </Carousel>
        </div>
      )}
      {viewPort <= 1440 && viewPort > 1024 && (
        <div className={styles.reviews__slider}>
          <Carousel
            centerMode
            centerSlidePercentage={50}
            // infiniteLoop
            showStatus={false}
            swipeScrollTolerance={30}
            showThumbs={false}
          >
            {arrReviews.map((review) => (
              <UICardReview key={review} review={review} />
            ))}
          </Carousel>
        </div>
      )}
      {viewPort <= 1024 && viewPort > 768 && (
        <div className={styles.reviews__slider}>
          <Carousel
            centerMode
            centerSlidePercentage={75}
            // infiniteLoop
            showStatus={false}
            swipeScrollTolerance={30}
            showThumbs={false}
          >
            {arrReviews.map((review) => (
              <UICardReview key={review} review={review} />
            ))}
          </Carousel>
        </div>
      )}
      {viewPort <= 768 && (
        <div className={styles.reviews__slider}>
          <Carousel
            centerMode
            centerSlidePercentage={100}
            // infiniteLoop
            showStatus={false}
            swipeScrollTolerance={30}
            showThumbs={false}
          >
            {arrReviews.map((review) => (
              <UICardReview key={review} review={review} />
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
}
