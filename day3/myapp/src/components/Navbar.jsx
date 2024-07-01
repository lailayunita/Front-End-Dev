import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar1}>
          <h2>Laila</h2>
        </div>

        <div className={styles.navbar2}>
          <ul className={styles.navItem}>
            <li>Home</li>
            <li>Profile</li>
            <li>Projects</li>
            <li>Skills</li>
          </ul>
        </div>

        <div className={styles.navbar3}>
          <button>Contact Me</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
