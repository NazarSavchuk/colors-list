import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import styles from "./Error.module.scss";
const Error = () => {
  return (
    <div className={styles.error}>
      Error <ErrorOutlineIcon fontSize="large" />
    </div>
  );
};

export default Error;
