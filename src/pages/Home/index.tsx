import React from "react";
import DataTable from "../../components/DataTable";
import Pagination from "../../components/Pagination";
import InputField from "../../components/InputField";
import Error from "../../components/Error";

import { useSearchParams } from "react-router-dom";

import { selectFilter } from "../../redux/filter/selectors";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { setPage } from "../../redux/filter/slice";
import { setSearchId } from "../../redux/filter/slice";

import styles from "./Home.module.scss";
import { selectColorData } from "../../redux/colors/selectors";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const { searchId, page } = useSelector(selectFilter);
  const { itemsData, status } = useSelector(selectColorData);

  React.useEffect(() => {
    setTimeout(() => {
      if (searchParams.get("page") === null) {
        setSearchParams({ page: page });
      } else {
        if (searchParams.get("page") !== page) {
          dispatch(setPage(Number(searchParams.get("page"))));
        }
      }

      if (searchParams.get("id") !== null) {
        dispatch(setSearchId(searchParams.get("id")));
      }
    }, 100);
  }, []);

  React.useEffect(() => {
    if (searchParams.get("page") !== page) {
      setSearchParams({ page: page });
    }
  }, [page]);

  React.useEffect(() => {
    if (searchId) {
      setSearchParams({ id: searchId });
    } else {
      setSearchParams({ page });
    }
  }, [searchId]);

  if (status === "error") {
    return <Error />;
  } else {
    if (!itemsData) {
      return <>Loading</>;
    } else {
      return (
        <div className={styles.homePage}>
          <div className={styles.textField}>
            <InputField />
          </div>
          <div className={styles.mainData}>
            <DataTable />
          </div>
          <Pagination />
        </div>
      );
    }
  }
};

export default Home;
