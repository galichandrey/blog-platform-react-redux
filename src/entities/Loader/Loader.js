import React from "react";

import classes from "./Loader.module.scss";

const Loader = () => (
  <div className={classes.spinnerContainer}>
    <div className={classes.loaderSpinner}></div>
    <div>Loading tickets. Please, wait a bit to get the best ticket offer</div>
  </div>
);

export default Loader;
