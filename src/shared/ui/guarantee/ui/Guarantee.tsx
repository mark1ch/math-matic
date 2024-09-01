import { UIGuaranteeProps } from "shared/ui/types";
import styles from "./Guarantee.module.scss";
import { cn } from "shared/lib";

export function UIGuarantee({
  title,
  paragraph1,
  paragraph2,
  revers,
  even,
}: UIGuaranteeProps) {
  return (
    <div className={cn(styles.guarantee, { [styles.guarantee__even]: even })}>
      <div
        className={cn(styles.guarantee__top, {
          [styles.guarantee__top_revers]: revers,
        })}
      >
        <p className={styles.guarantee__top__title}>{title}</p>
        <p className={styles.guarantee__top__par}>{paragraph1}</p>
      </div>
      {paragraph2 && (
        <div
          className={cn(styles.guarantee__bot, {
            [styles.guarantee__bot_revers]: revers,
          })}
        >
          <p className={styles.guarantee__bot__par}>{paragraph2}</p>
        </div>
      )}
    </div>
  );
}
