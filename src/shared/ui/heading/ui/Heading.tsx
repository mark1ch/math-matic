import { UIHeadingProps } from "shared/ui/types";
import styles from "./Heading.module.scss";
import { cn } from "shared/lib";

export function UIHeading({ head, number, title, cls }: UIHeadingProps) {
  return (
    <div className={cn(styles.heading, cls)}>
      <span className={cn(styles.heading__head)}>
        <span>{head}</span>
        <span>{`(${number})`}</span>
      </span>
      <p className={cn(styles.heading__title)}>{title}</p>
    </div>
  );
}
