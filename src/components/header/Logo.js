import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const logo = (
    <div className={styles.logo}>
      <Link to="/">
        <h2>
          lizdev<span>mall</span>{" "}
        </h2>
      </Link>
    </div>
  );
