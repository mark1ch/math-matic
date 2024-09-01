import { UIQuantityProps } from "shared/ui/types";
import styles from "./Quantity.module.scss";

export function UIQuantity({ pre, number, percent, text }: UIQuantityProps) {
  return (
    <div className={styles.quantity}>
      <div className={styles.quantity__head}>
        {pre && <p className={styles.quantity__head__pre}>{pre}</p>}
        <p className={styles.quantity__head__number}>
          {number}
          {percent && <sup>&#37;</sup>}
        </p>
      </div>
      <p className={styles.quantity__text}>{text}</p>
    </div>
  );
}
