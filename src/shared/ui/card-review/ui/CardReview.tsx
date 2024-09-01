import { UIModal } from "shared/ui/modal";
import styles from "./CardReview.module.scss";
import { cn, useModal } from "shared/lib";
import { useRef, useState } from "react";

export function UICardReview({ review }: { review: number }) {
  const [showModal, setShowModal] = useState(false);
  const { openModal, closeModal } = useModal();
  const [bigImg, setBigImg] = useState(false);
  const refImg = useRef<HTMLImageElement>(null);

  const onLoadImage = () => {
    if (refImg.current) {
      const height = refImg.current.offsetHeight;
      if (height > 250) setBigImg(true);
    }
  };

  const handleOpenModal = () => {
    openModal(setShowModal);
  };

  const handleCloseModal = () => {
    closeModal(setShowModal);
  };

  return (
    <>
      <div className={cn(styles.card)} onClick={handleOpenModal}>
        <img
          src={`assets/reviews/${review}.jpg`}
          alt={`reviews${review}`}
          ref={refImg}
          onLoad={onLoadImage}
        />
        {bigImg && <div className={cn({ [styles.card__big]: bigImg })}></div>}
      </div>
      <UIModal show={showModal} closeModal={handleCloseModal}>
        <img src={`assets/reviews/${review}.jpg`} alt={`reviews${review}`} />
      </UIModal>
    </>
  );
}
