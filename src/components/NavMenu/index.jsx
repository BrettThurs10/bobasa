import React from "react";
import styles from "../../styles";
import { mainNavItems } from "./navMenuItems";
import { NavItems } from "components/NavMenu/NavMenuItems";

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
