import React from "react";
import { logo } from "./Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <header>
        <div className="styles.header">
          {logo}
          <nav>
            <ul></ul>
            <div></div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
