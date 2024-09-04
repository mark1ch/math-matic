import { cn } from "shared/lib";
import styles from "./ShadowBurger.module.scss";

export function ShadowBurger({
  openShadowBurger,
}: {
  openShadowBurger: boolean;
}) {
  return (
    <div
      className={cn(styles.shadow_burger, {
        [styles.shadow_burger_open]: openShadowBurger,
      })}
      onClick={(event) => {
        console.log("epta blya", event);
        event.stopPropagation();
      }}
    ></div>
  );
}
