import Link from "next/link";
import * as React from "react";
import { FaYoutube } from "react-icons/fa";
import { appContext } from "../../../../pages/_app";
import BannerWithImage from "../../../template/BannerWithImage";
import styles from "./style.module.scss";
import { useAnalytics } from "use-analytics";

const Banner: React.FunctionComponent = () => {
  const { setVideoOpen } = React.useContext(appContext);

  const { track } = useAnalytics();

  return (
    <BannerWithImage as="section" imageUrl="/suit1.webp">
      <div className={styles.container}>
        <h1 className={styles.title}>
          TUNISIA ENTREPRENEURSHIP <br />
          SUMMIT :<br /> <span className={styles.bigger}>TRIPLE I</span>
        </h1>

        <h2 className={styles.subtitle}>
          Industry, Innovation & Infrastructure <br />
          November 21-2020
        </h2>

        <div className={styles.interact}>
          <Link href="/challenge" passHref>
            <a
              onClick={() => track("challenge page from banner")}
              className={styles.joinButton}
            >
              CHECK THE CHALLENGE
            </a>
          </Link>

          <span> or </span>
          <button
            onClick={() => {
              setVideoOpen(true);
              track("trailerClick");
            }}
            className={styles.videoButton}
          >
            <FaYoutube /> Watch The Trailer
          </button>
        </div>
      </div>
    </BannerWithImage>
  );
};

export default Banner;
