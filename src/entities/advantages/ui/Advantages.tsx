import { UIGuarantee, UIHeading } from "shared/ui";
import styles from "./Advantages.module.scss";
import { advantagesData } from "../lib";

export function Advantages() {
  return (
    <section className={styles.advantages}>
      <UIHeading
        head="ПРЕИМУЩЕСТВА"
        number={2}
        title="ЧТО ВЫ ПОЛУЧАЕТЕ, РАБОТАЯ СО МНОЙ:"
        cls={styles.advantages__head}
      />
      <div className={styles.advantages__content}>
        <div>
          {advantagesData.map((item, index) => (
            <UIGuarantee
              title={item.title}
              paragraph1={item.paragraph1}
              paragraph2={item.paragraph2}
              revers={item.revers}
              even={index === 1 || index === 3}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
