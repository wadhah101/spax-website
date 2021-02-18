import * as React from "react";
import { FaYoutube } from "react-icons/fa";
import { appContext } from "../../../../pages/_app";
import BannerWithImage from "../../../template/BannerWithImage";
import styles from "./style.module.scss";
import clsx from "clsx";
import Countdown from "../Countdown";
import dayjs from "dayjs";

const Banner: React.FunctionComponent = () => {
  const { setVideoOpen } = React.useContext(appContext);
  const eventDate = dayjs("2021-02-24T16:00:00.000Z");

  return (
    <BannerWithImage as="section" imageUrl="/2.jpg">
      <div className={styles.container}>
        <h1 className="text-6xl font-extrabold md:text-8xl">
          SPA<span className=" text-spaRed-500">x</span> <br />
          Tunisia
        </h1>

        <div className="mt-4">
          {/* <Link href="/challenge" passHref>
            <a
              onClick={() => track("challenge page from banner")}
              className={styles.joinButton}
            >
              CHECK THE CHALLENGE
            </a>
          </Link>

          <span> or </span> */}
          <button
            onClick={() => setVideoOpen(true)}
            className={clsx(
              "flex text-lg items-center hover:text-gray-300 duration-300 ease-in-out transition-colors"
            )}
          >
            <div className="mr-2 text-3xl">
              <FaYoutube />
            </div>
            <span>Watch The Trailer</span>
          </button>
        </div>

        <div className="mt-6">
          <Countdown date={eventDate} />
        </div>
      </div>

      {/* TODO add time counter */}
    </BannerWithImage>
  );
};

export default Banner;
