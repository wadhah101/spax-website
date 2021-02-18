import { socialElements } from "../../../data/social.data";
import styles from "./footer.module.scss";
import { FaMailBulk } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <img src="/logo/logo.png" />
          <p className="mt-6 text-sm font-semibold">
            © 2021 All Right reserved
          </p>
        </div>
        <div className="flex-grow" />
        {/* questions , follow  */}
        <div className="">
          <div className="mb-6">
            <h3 className="mb-1 text-lg font-semibold uppercase">follow us</h3>
            {/* social media icons */}
            <div className="flex items-center ">
              {socialElements.map((e) => (
                <a
                  title={e.name}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={e.href}
                  className="mr-2 text-2xl"
                >
                  <e.icon />
                </a>
              ))}
            </div>
          </div>
          {/* social media icons */}
          {/* emails */}
          <h3 className="mb-1 text-lg font-semibold uppercase">contact us</h3>
          <div className="">
            {[
              { icon: FaMailBulk, text: "ieee.insat.sb@gmail.com" },
              { icon: FaMailBulk, text: "sb.enit@ieee.org" },
            ].map((e, ind) => (
              <div className="flex items-center" key={ind}>
                <div>
                  <e.icon />
                </div>
                <p className="ml-2"> {e.text} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
