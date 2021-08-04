import React from "react";
import styles from "../../styles";
import { mainNavItems } from "./mainNavItems";
import { NavItems } from "./NavItems";
export const Menu = ({ sub, array }) => {
  return (
    <ul className={sub && styles.subMenuItem}>
      <NavItems sub={sub} array={array} />
    </ul>
  );
};

const NavMenu = () => {
  return (
    <div className={styles.navMenu}>
      <Menu array={mainNavItems} />
    </div>
  );
};

export default NavMenu;
