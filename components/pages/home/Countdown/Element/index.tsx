import * as React from "react";
import css from "./element.module.scss";

interface Props {
  value: number;
  text: string;
}

const NumberTransform = (n: number) => (n >= 10 ? `${n}` : `0${n}`);

const CountdownElement: React.FunctionComponent<Props> = ({ value, text }) => {
  return (
    <div className={css.container}>
      <p className={css.num}> {NumberTransform(value)} </p>
      <p> {text} </p>
    </div>
  );
};

export default CountdownElement;
