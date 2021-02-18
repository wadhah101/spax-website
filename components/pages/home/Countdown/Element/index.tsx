import * as React from "react";

interface ICountdownElementProps {
  value: number;
  text: string;
}

const CountdownElement: React.FC<ICountdownElementProps> = ({
  value,
  text,
}) => {
  return (
    <div className="flex flex-col items-center px-6 py-2 border border-white rounded border-opacity-20 justify-items-center">
      <p className="text-4xl text-spaYellow-500">
        {String(value).padStart(2, "0")}
      </p>
      <p> {text} </p>
    </div>
  );
};

export default CountdownElement;
