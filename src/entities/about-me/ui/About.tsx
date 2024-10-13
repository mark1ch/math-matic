import { UIHeading, UIModal } from "shared/ui";
import styles from "./About.module.scss";
import { useModal } from "shared/lib";
import { useState } from "react";

export function About() {
  const [isShowImg1, setIsShowImg1] = useState(false);
  const [isShowImg2, setIsShowImg2] = useState(false);
  const { openModal, closeModal } = useModal();

  const handleShowOpenImg1 = () => {
    openModal(setIsShowImg1);
  };

  const handleShowCloseImg1 = () => {
    closeModal(setIsShowImg1);
  };

  const handleShowOpenImg2 = () => {
    openModal(setIsShowImg2);
  };

  const handleShowCloseImg2 = () => {
    closeModal(setIsShowImg2);
  };

  return (
    <section className={styles.about} data-anchor="section-about">
      <div className={styles.about__content}>
        <UIHeading
          head="о себе"
          number={1}
          title="роман назаров"
          cls={styles.about__head}
        />
        <div className={styles.about__content__abzac1}>
          <p>
            Я ОКОНЧИЛ ШКОЛУ С ЗОЛОТОЙ МЕДАЛЬЮ И ПОЛУЧИЛ ВЫСШЕЕ ОБРАЗОВАНИЕ С
            КРАСНЫМ ДИПЛОМОМ НА ФИЗИКО-ТЕХНИЧЕСКОМ ФАКУЛЬТЕТЕ КУБАНСКОГО
            ГОСУДАРСТВЕННОГО УНИВЕРСИТЕТА, ЧТО ДАЛО МНЕ ГЛУБОКИЕ ЗНАНИЯ В
            ОБЛАСТИ МАТЕМАТИКИ.
          </p>
        </div>
        <p className={styles.about__content__abzac2}>
          У МЕНЯ ЕСТЬ ЧЕТЫРЕХЛЕТНИЙ ОПЫТ ПРЕПОДАВАНИЯ, И Я С РАДОСТЬЮ ПОМОГУ
          ТЕБЕ ОСВОИТЬ МАТЕМАТИКУ - НАУКУ, КОТОРАЯ ПОМОГАЕТ НАМ РАЗВИВАТЬ
          ЛОГИЧЕСКОЕ МЫШЛЕНИЕ, РЕШАТЬ СЛОЖНЫЕ ЗАДАЧИ И ПОНИМАТЬ МИР ВОКРУГ НАС.
        </p>
        <div className={styles.about__content__images}>
          <div className={styles.about__content__images_1}>
            <div onClick={handleShowOpenImg1}>
              <picture>
                <source
                  srcSet="assets/about-me/photo-1-480.jpg 480w, assets/about-me/photo-1-780.jpg 960w, assets/about-me/photo-1-1080.jpg 1920w"
                  sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
                />
                <img src="assets/about-me/pc/photo-1.jpg" alt="photo_1" />
              </picture>
            </div>
          </div>
          <UIModal show={isShowImg1} closeModal={handleShowCloseImg1}>
            <picture>
              <source
                srcSet="assets/about-me/photo-1-480.jpg 480w, assets/about-me/photo-1-780.jpg 960w, assets/about-me/photo-1-1080.jpg 1920w"
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
              />
              <img src="assets/about-me/pc/photo-1.jpg" alt="photo_1" />
            </picture>
          </UIModal>
          <div className={styles.about__content__images_2}>
            <div onClick={handleShowOpenImg2}>
              <picture>
                <source
                  srcSet="assets/about-me/photo-2-480.jpg 480w, assets/about-me/photo-2-780.jpg 960w, assets/about-me/photo-2-1080.jpg 1920w"
                  sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
                />
                <img src="assets/about-me/pc/photo-2.jpg" alt="photo_2" />
              </picture>
            </div>
          </div>
          <UIModal show={isShowImg2} closeModal={handleShowCloseImg2}>
            <picture>
              <source
                srcSet="assets/about-me/photo-2-480.jpg 480w, assets/about-me/photo-2-780.jpg 960w, assets/about-me/photo-2-1080.jpg 1920w"
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 960px, 100vw"
              />
              <img src="assets/about-me/pc/photo-2.jpg" alt="photo_2" />
            </picture>
          </UIModal>
        </div>
      </div>
      <div className={styles.about__bleach}></div>
    </section>
  );
}
