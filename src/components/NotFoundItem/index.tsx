import React from "react";
import styles from "./NotFoundItem.module.scss";

import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const NotFoundItem = () => {
  return (
    <div className={styles.notFoundItem}>
      Item not found{" "}
      <SentimentDissatisfiedIcon fontSize="large" color="warning" />
    </div>
  );
};

export default NotFoundItem;
