import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import Pagination from "../../components/Pagination";

import { useSearchParams } from "react-router-dom";

import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { setPage } from "../../redux/filter/slice";
import { setSearchId } from "../../redux/filter/slice";

import debounce from "lodash.debounce";

import { TextField } from "@mui/material";
import styles from "./Home.module.scss";

const Home = () => {
  const [findId, setFindId] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const { searchId, page } = useSelector(selectFilter);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchId(str));
    }, 900),
    []
  );

  const handleChange = (e: any) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setFindId(e.target.value);
      updateSearchValue(e.target.value);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (searchParams.get("page") === null) {
        setSearchParams({ page: page });
      } else {
        if (searchParams.get("page") != page) {
          dispatch(setPage(Number(searchParams.get("page"))));
        }
      }
    }, 100);
  }, []);

  React.useEffect(() => {
    if (searchParams.get("page") != page) {
      setSearchParams({ page: page });
    }
  }, [page]);

  React.useEffect(() => {
    if (searchId) {
      setSearchParams({ id: searchId });
    } else {
      setSearchParams({ page: page });
    }
  }, [searchId]);

  return (
    <div className={styles.homePage}>
      <div className={styles.textField}>
        <TextField
          label="Enter id"
          color="secondary"
          focused
          type="number"
          onChange={(e) => handleChange(e)}
          value={findId}
        />
      </div>
      <div className={styles.mainData}>
        <DataTable />
      </div>
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
