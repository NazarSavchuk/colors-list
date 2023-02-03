import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import styles from "./Error.module.scss";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.error}>
      <div className={styles.errorMessage}>
        Error, not found <ErrorOutlineIcon fontSize="large" />
      </div>
      <Button
        variant="contained"
        sx={{ display: "block" }}
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}>
        Back
      </Button>
    </div>
  );
};

export default Error;
