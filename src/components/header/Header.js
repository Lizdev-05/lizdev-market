import React, { useState } from "react";
import { logo } from "./Logo";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
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

  const activeLinks = ({isActive}) => ( isActive ? `${styles.active}` : "")
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
                <NavLink to='/' className={activeLinks}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/contact' className={activeLinks}>Contact</NavLink>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <NavLink to='/login' className={activeLinks}>Login</NavLink>
                <NavLink to='/register' className={activeLinks}>Register</NavLink>
                <NavLink to='/order-history' className={activeLinks}>My orders</NavLink>
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
