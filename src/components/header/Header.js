import React from "react";
import { logo } from "./Logo";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"

const Header = () => {
  return (
   
      <header>
        <div className={styles.header}>
          {logo}
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
            <div className={styles["header-right"]}>
              <span className={styles.links}>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/order-history'>My orders</Link>
              </span>
            </div>
          </nav>
        </div>
      </header>

  );
};

export default Header;
