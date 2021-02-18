import React, { useEffect, useState } from "react";
import CountdownElement from "./Element";
import duration from "dayjs/plugin/duration";
import dayjs, { Dayjs } from "dayjs";
import styles from "./countdown.module.scss";

const periods = ["Weeks", "Days", "Hours", "Min", "Sec"];

const dateDiffFactoryFix = (current: Dayjs, event: Dayjs): number[] => {
  const diff = dayjs.duration(event.diff(current));
  return [
    diff.seconds(),
    diff.minutes(),
    diff.hours(),
    diff.days(),
    diff.weeks(),
  ].map((e) => Math.max(0, e));
};

interface ICountdownProps {
  date: Dayjs;
}

const Countdown: React.FC<ICountdownProps> = ({ date }) => {
  const [data, setdata] = useState(new Array<number>(5).fill(0));
  const dataView = [...data]
    .reverse()
    .map((e, ind) => ({ value: e, text: periods[ind] }));

  useEffect(() => {
    dayjs.extend(duration);
    const interval = setInterval(() => {
      const newArr = dateDiffFactoryFix(dayjs(), date);
      setdata(newArr);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.elementGrid}>
      {dataView.map(({ value, text }) => (
        <CountdownElement key={text} value={value} text={text} />
      ))}
    </div>
  );
};

export default Countdown;
