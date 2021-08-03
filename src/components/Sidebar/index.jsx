import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles";
import Brand from "components/Brand";
import NavMenu from "components/NavMenu";

const Sidebar = (props) => {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <Brand />
      <NavMenu />
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
