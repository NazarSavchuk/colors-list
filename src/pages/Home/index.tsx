import React from "react";
import DataTable from "../../components/DataTable";
import Pagination from "../../components/Pagination";

import { TextField } from "@mui/material";
import styles from "./Home.module.scss";

const Home = () => {
  const [searchId, setsearchId] = React.useState();

  const handleChange = (e: any) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setsearchId(e.target.value);
    }
  };

  React.useEffect(() => {
    const params = new URLSearchParams();
    // params.append();
  }, []);
  return (
    <div className={styles.homePage}>
      <div className={styles.textField}>
        <TextField
          label="Enter id"
          color="secondary"
          focused
          type="text"
          onChange={(e) => handleChange(e)}
          value={searchId}
        />
      </div>
      <DataTable />
    </div>
  );
};

export default Home;
