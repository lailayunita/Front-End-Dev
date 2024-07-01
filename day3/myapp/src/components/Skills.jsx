import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <div className={styles.skills}>
        <div className={styles.title}>
          <h2>Tools & Skills</h2>
        </div>
        <div className={styles.tools}>
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
    </>
  );
};

export default Skills;
