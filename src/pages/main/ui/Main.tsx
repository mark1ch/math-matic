import { About, Facts, Reviews } from "entities";
import { Advantages } from "entities";
import { Header } from "widgets";
import styles from "./Main.module.scss";
// import { useState } from "react";

export function Main() {
  // const [isOpenSlider, setIsOpenSlider] = useState(false);
  return (
    <div className={styles.main}>
      <Header />
      <About />
      <Advantages />
      <Facts />
      <Reviews />
    </div>
  );
}
