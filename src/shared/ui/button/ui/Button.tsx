import { cn } from "shared/lib";
import styles from "./Button.module.scss";
import { UIButtonProps } from "shared/ui/types";

export function UIButton({ children, cls }: UIButtonProps) {
  return <button className={cn(styles.button, cls)}>{children}</button>;
}
