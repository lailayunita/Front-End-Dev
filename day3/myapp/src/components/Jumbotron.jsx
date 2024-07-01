/* eslint-disable react/prop-types */
import styles from "./Jumbotron.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Jumbotron = () => {
  return (
    <>
      <div className={styles.jumbotron}>
        <div className={styles.left}>
          <div className={styles.greeting}>
            <div>
              <h1>Hello There,</h1>
              <h1>
                I am <span>Laila Yunita</span>
              </h1>
              <p>I am a Fullstack Development Student at Purwadhika</p>
            </div>
          </div>
          <div className={styles.sosmed}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.item} />
            <FontAwesomeIcon icon={faInstagram} className={styles.item} />
            <FontAwesomeIcon icon={faGithub} className={styles.item} />
          </div>
        </div>
        <div className={styles.right}>
          <img src="../public/foto.png" alt="gitar" />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
