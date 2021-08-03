import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles";
import Header from "components/Header";

const Content = (props) => {
  return (
    <div id="content" className={styles.content}>
      <Header />
      <div className={styles.innerContent}>le content</div>
    </div>
  );
};

Content.propTypes = {};

export default Content;
