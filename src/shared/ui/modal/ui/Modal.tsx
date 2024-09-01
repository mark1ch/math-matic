import { useMemo } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { cn } from "shared/lib";
import { UIModalProps } from "shared/ui/types";

export function UIModal({ children, show, closeModal, slider }: UIModalProps) {
  const positionTop = useMemo(() => {
    return window.scrollY;
  }, [show]);
  return (
    <>
      {show &&
        createPortal(
          <div
            className={styles.modal}
            onClick={closeModal}
            style={{ top: positionTop }}
          >
            <div
              className={cn(styles.modal__children, {
                [styles.modal__children_slider]: slider,
              })}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
