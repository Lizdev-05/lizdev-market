import React, { useState } from "react";
import { logo } from "./Logo";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { cart } from "./Cart";

const Header = () => {

  const [show, setShow ] = useState(false);

  const toggleNav = () => {
       setShow(!show)
  }
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
             { cart }
            </div>
          </nav>
        </div>
      </header>

  );
};

export default Header;
