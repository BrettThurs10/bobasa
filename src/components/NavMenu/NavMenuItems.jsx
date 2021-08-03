import React from "react";
import { createUUID } from "utils";
import styles from "../../styles";
import { Menu } from "components/NavMenu/";

const NavItem = ({ icon, title, subMenu }) => {
  return (
    <li key={createUUID()}>
      {icon} {title}
      {subMenu && <Menu sub array={subMenu} />}
    </li>
  );
};

export const NavItems = ({ sub, array }) => {
  return array.map((item) => {
    return (
      <NavItem
        className={styles.subMenuItem}
        key={createUUID()}
        icon={item.icon}
        title={item.title}
        subMenu={item.subMenu}
      />
    );
  });
};
