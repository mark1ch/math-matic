import { Logo } from "features";
import styles from "./Header.module.scss";
import { cn } from "shared/lib";
import { UIButton } from "shared/ui";

export function Header() {
  return (
    <header className={cn(styles.header)}>
      <Logo />
      <div className={cn(styles.header__buttons)}>
        <UIButton>
          <a href="https://vk.com/romanpromatan">
            <img src="assets/icon/icon-vk.svg" alt="link_vk" />
          </a>
        </UIButton>
        <UIButton>
          <a href="https://t.me/nazaroved">
            <img src="assets/icon/icon-tg.svg" alt="link_tg" />
          </a>
        </UIButton>
        <UIButton cls={styles.btn_inst}>
          <a href="">
            <img src="assets/icon/icon-inst.svg" alt="link_inst" />
          </a>
        </UIButton>
      </div>
      <UIButton cls={styles.btn_menu}>
        <img src="assets/icon/icon-menu.svg" alt="btn_menu" />
      </UIButton>
    </header>
  );
}
