import { BurgerMenu, Logo } from "features";
import styles from "./Header.module.scss";
import { cn } from "shared/lib";
import { UIButton } from "shared/ui";
import { useEffect, useState, MouseEvent } from "react";
import { ShadowBurger } from "entities";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpenMenu(!isOpenMenu);
    const btnMenu = document.querySelector(`.${styles.btn_menu}`);
    btnMenu?.setAttribute("disabled", "disabled");

    setTimeout(() => {
      btnMenu?.removeAttribute("disabled");
    }, 1500);
  };

  const handleMenuBody = () => {
    if (!isOpenMenu) setIsOpenMenu(false);
    else return;
  };

  const clickLink = (event: MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    event.stopPropagation();
    const block = document.querySelector(`[data-anchor=${section}]`);
    block?.scrollIntoView({ behavior: "smooth" });
    setIsOpenMenu(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleMenuBody);

    return () => {
      document.body.removeEventListener("click", handleMenuBody);
    };
  }, []);

  return (
    <header
      className={cn(styles.header)}
      onClick={(event) => event.stopPropagation()}
    >
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
      <UIButton cls={cn(styles.btn_menu)} onClick={handleMenu}>
        <img
          src="assets/icon/icon-menu.svg"
          alt="btn_menu"
          className={cn({ [styles.btn_burger_hidden]: isOpenMenu })}
        />
        <img
          src="assets/icon/icon-close-white.svg"
          alt="btn_menu"
          className={cn(styles.btn_menu_close_hidden, {
            [styles.btn_menu_close_show]: isOpenMenu,
          })}
        />
        <ShadowBurger openShadowBurger={isOpenMenu} />
        <BurgerMenu show={isOpenMenu} clickLink={clickLink} />
      </UIButton>
    </header>
  );
}
