import { socialElements } from "../../../data/social.data";
import styles from "./footer.module.scss";
import * as fa from "react-icons/fa";
import { useAnalytics } from "use-analytics";

const Footer: React.FC = () => {
  const { track } = useAnalytics();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <img src="/logo/logo.png" />
        </div>
        <div style={{ flex: 1 }} />
        {/* questions , follow  */}
        <div className={styles.right}>
          <h3 style={{ marginBottom: "0.5rem" }} className={styles.title}>
            follow us
          </h3>
          {/* social media icons */}
          <div className={styles.social}>
            {socialElements.map((e) => (
              <a
                title={e.name}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                key={e.href}
                onClick={() => track(`${e.name} click`)}
              >
                <e.icon />
              </a>
            ))}
          </div>
          {/* social media icons */}
          {/* emails */}
          <h3
            style={{ marginBottom: "0.25rem", marginTop: "1rem" }}
            className={styles.title}
          >
            contact us
          </h3>
          <p className={styles.mail}>
            <fa.FaMailBulk />
            <span>ieee.insat.sb@gmail.com</span>
          </p>
          <p className={styles.mail}>
            <fa.FaMailBulk />
            <span>sb.enit@ieee.org</span>
          </p>
        </div>
      </div>
      <div className={styles.sep} />
      <div className={styles.writingContainer}>
        <p>© 2020 IEEE INSAT, IEEE ENIT, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
