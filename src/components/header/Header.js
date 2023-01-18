import React, { useState } from "react";
import { logo } from "./Logo";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { cart } from "./Cart";
import {FaTimes} from "react-icons/fa"
import {HiOutlineMenuAlt3} from "react-icons/hi"
const Header = () => {

  const [showMenu, setShowMenu ] = useState(false);

  const toggleMenu = () => {
       setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }
  return (
   
      <header>
        <div className={styles.header}>
          {logo}
          <nav className={showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`}>
            <div className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` : `${styles['nav-wrapper']}`} onClick={hideMenu}>

            </div>
            <ul onClick={hideMenu}>
            <li className={styles['logo-mobile']}>
            {logo}
            <FaTimes size={22} color='#fff' onClick={hideMenu}/>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/order-history'>My orders</Link>
              </span>
             { cart }
            </div>
          </nav>

          <div className={styles['menu-icon']}>
          { cart }
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
          </div>
        </div>
      </header>

  );
};

export default Header;
