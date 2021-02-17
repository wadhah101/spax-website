import * as React from "react";
import { withAnalytics } from "use-analytics";
import styles from "./bas3ePage.module.scss";
import clsx from "clsx";

const BasePage: React.FunctionComponent<{
  className?: string;
  analytics: { page: () => void };
}> = ({ children, className, analytics: { page } }) => {
  React.useEffect(() => {
    if (window?.location?.hostname !== "localhost") page();
  }, []);
  return <div className={clsx(className, styles.basePage)}> {children} </div>;
};

export default withAnalytics(BasePage);
