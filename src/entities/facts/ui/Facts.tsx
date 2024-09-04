import { UIHeading, UIQuantity } from "shared/ui";
import styles from "./Facts.module.scss";

export function Facts() {
  return (
    <section className={styles.facts} data-anchor="section-facts">
      <UIHeading
        title="РЕПЕТИТОРСТВО СТАЛО НЕОТЪЕМЛЕМОЙ ЧАСТЬЮ МОЕЙ ЖИЗНИ 5 ЛЕТ НАЗАД. ЗА ЭТО ВРЕМЯ Я ВЫПУСТИЛ БОЛЬШОЕ КОЛИЧЕСТВО УЧЕНИКОВ"
        head="НЕМНОГО ФАКТОВ"
        number={3}
        cls={styles.facts__head}
      />
      <div className={styles.facts__content}>
        <UIQuantity pre=">" number={70} text="ВЫПУЩЕННЫХ УЧЕНИКОВ" />
        <UIQuantity number={90} percent text="СДАЮТ ОГЭ И ЕГЭ НА ОТЛИЧНО" />
        <UIQuantity number={100} percent text="ПОЛОЖИТЕЛЬНЫХ ОТЗЫВОВ" />
      </div>
    </section>
  );
}
