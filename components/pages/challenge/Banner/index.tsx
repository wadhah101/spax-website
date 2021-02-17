import * as React from "react";
import BannerWithImage from "../../../template/BannerWithImage";
import styles from "./banner.module.scss";
import * as fa from "react-icons/fa";
import { useAnalytics } from "use-analytics";

const imageUrl = "challenge.webp";

const Banner: React.FunctionComponent = () => {
  const { track } = useAnalytics();

  return (
    <BannerWithImage imageUrl={imageUrl}>
      <div className={styles.rContainer}>
        <h1 className={styles.rTitle}>
          ARE YOU UP <br /> TO THE <br />
          <span className={styles.bigger}> CHALLENGE ?</span>
        </h1>
        <a
          href="/files/tripe-i-specs.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => track("downloaded cdc")}
          className={styles.cdcButton}
        >
          <span>DOWNLOAD SPECIFICATIONS (CAHIER DE CHARGE)</span>
          <fa.FaDownload />
        </a>
      </div>
    </BannerWithImage>
  );
};

export default Banner;
