import clsx from "clsx";
import * as React from "react";
import styles from "./whyus.module.scss";

const arr = [
  {
    title: "Proven expertise",
    text: `This summit will feature multiple testimonials and experiences shared by infrastructure experts and industry specialists in various fields, who will be speaking during the event, and sharing their expertise in various talks (Big Data, Blockchain, Robotics, E-health, Fintech, Agritech)`,
  },
  {
    title: "national reach",
    text: `Our competition will bring along teams from the many parts of Tunisia , all having the same goal. The winner will qualify to international summit and have a chance to have his dream-project started`,
  },
  {
    title: "community driven",
    text: `We believe that entrepreneurship is considered an important instrument to realize the potential among deprived communities isolated from the mainstream economy . Cultural values, shared resources, and mutual trust work for the community.`,
  },
];

const WhyUs: React.FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <h2 className={styles.title}>
          why <span style={{ whiteSpace: "nowrap" }}> us ? </span>
        </h2>
        <ul className={clsx(styles.imageGrid, styles.s)}>
          {arr.map((e, ind) => (
            <li className={styles.el} key={ind}>
              <h3>
                {e.title.split(" ").map((e, ind) => (
                  <span key={ind}>
                    {e} <br />
                  </span>
                ))}
              </h3>
              <p> {e.text} </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
