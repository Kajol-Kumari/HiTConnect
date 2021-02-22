import React, { Fragment } from "react";

import { Button1 } from "../../template/button/button";
import styles from "./motive.module.css";

const Motive = () => {
  return (
    <Fragment>
      <div className={styles.motive}>
        <h2 className={styles.subtitle}>
          Get all the club details of HITK here!
        </h2> <br />
        <a href="/clubs-menu">
          <Button1 label="Clubs Menu!" type="submit" />
        </a>
      </div>
    </Fragment>
  );
};

export default Motive;
