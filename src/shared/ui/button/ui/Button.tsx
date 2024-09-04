import { cn } from "shared/lib";
import styles from "./Button.module.scss";
import { UIButtonProps } from "shared/ui/types";

export function UIButton({ children, cls, onClick }: UIButtonProps) {
  return (
    <button className={cn(styles.button, cls)} onClick={onClick}>
      {children}
    </button>
  );
}
