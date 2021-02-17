import * as React from "react";
import TimelineElement from "./Element";
import styles from "./schedule.module.scss";
import { TIMELINE_ARR } from "./index.data";

const Timeline: React.FunctionComponent = () => {
  return (
    <section className={styles.greyBg}>
      <div className={styles.container}>
        <h2 className={styles.baseTitle}> Timeline </h2>
        <ul className={styles.arr}>
          {TIMELINE_ARR.map(({ date, data }, id) => (
            <li className={styles.el} key={id}>
              <h3 className={styles.period}>
                {date.map((e, ind) => (
                  <React.Fragment key={ind}>
                    <div>
                      <p className={styles.num}> {e.format("DD")} </p>
                      <p> {e.format("MMMM")} </p>
                    </div>
                    {ind + 1 !== date.length && (
                      <div className={styles.daySeparator} />
                    )}
                  </React.Fragment>
                ))}
              </h3>
              <ul className={styles.elsGrid}>
                {data.map((e, ind) => (
                  <TimelineElement key={ind} {...e} />
                ))}
              </ul>
            </li>
          ))}
        </ul>{" "}
      </div>
    </section>
  );
};

export default Timeline;
