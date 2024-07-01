import styles from "./Projects.module.css";

const Project = () => {
  return (
    <>
      <div className={styles.project}>
        <div>
          <h2>Projects</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            <img
              src="https://ewm.swiss/application/files/5316/1553/3197/Beautiful_Website_EWM_SA_Digital_Agency_Geneva.jpg"
              alt="project 1"
            />
            <div className={styles.desc}>
              <h3>Project 1</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                necessitatibus?
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="https://ewm.swiss/application/files/5316/1553/3197/Beautiful_Website_EWM_SA_Digital_Agency_Geneva.jpg"
              alt="project 1"
            />
            <div className={styles.desc}>
              <h3>Project 2</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                necessitatibus?
              </p>
            </div>
          </div>{" "}
          <div className={styles.card}>
            <img
              src="https://ewm.swiss/application/files/5316/1553/3197/Beautiful_Website_EWM_SA_Digital_Agency_Geneva.jpg"
              alt="project 1"
            />
            <div className={styles.desc}>
              <h3>Project 3</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
