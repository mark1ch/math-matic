import { cn } from "shared/lib";
import { MouseEvent } from "react";
import styles from "./BurgerMenu.module.scss";
import { UIButton } from "shared/ui";
export function BurgerMenu({
  show,
  clickLink,
}: {
  show: boolean;
  clickLink: (event: MouseEvent<HTMLAnchorElement>, section: string) => void;
}) {
  return (
    <div
      className={cn(styles.burger_menu, { [styles.burger_menu_open]: show })}
      onClick={(event) => event.stopPropagation()}
    >
      <a href="#" onClick={(event) => clickLink(event, "section-about")}>
        О себе
      </a>
      <a href="#" onClick={(event) => clickLink(event, "section-advantages")}>
        Преимущества
      </a>
      <a href="#" onClick={(event) => clickLink(event, "section-facts")}>
        Факты
      </a>
      <a href="#" onClick={(event) => clickLink(event, "section-reviews")}>
        Отзывы
      </a>
      <div
        className={cn(styles.burger_menu__buttons, styles.shadow, {
          [styles.burger_menu__buttons_show]: show,
        })}
      >
        <UIButton>
          <a href="https://vk.com/romanpromatan">
            <img src="assets/icon/icon-vk-light.svg" alt="link_vk" />
          </a>
        </UIButton>
        <UIButton>
          <a href="https://t.me/nazaroved">
            <img src="assets/icon/icon-tg-light.svg" alt="link_tg" />
          </a>
        </UIButton>
        <UIButton cls={styles.btn_inst}>
          <a href="">
            <img src="assets/icon/icon-inst-light.svg" alt="link_inst" />
          </a>
        </UIButton>
      </div>
    </div>
  );
}
