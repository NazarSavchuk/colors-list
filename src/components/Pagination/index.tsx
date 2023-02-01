import React from "react";
import { useAppDispatch } from "../../redux/store";
import { setPage } from "../../redux/filter/slice";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";

import styles from "./Pagination.module.scss";

import { Button } from "@mui/material";

import { selectColorData } from "../../redux/colors/selectors";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectColorData);
  const { page } = useSelector(selectFilter);

  return (
    <div className={styles.pagination}>
      <Button
        variant="contained"
        disabled={page <= 1 || !Array.isArray(items.data)}
        onClick={() => dispatch(setPage(page - 1))}>
        Prev
      </Button>
      <div className={styles.currentPage}> {page}</div>
      <Button
        variant="contained"
        disabled={page >= items.total_pages || !Array.isArray(items.data)}
        onClick={() => dispatch(setPage(page + 1))}>
        Next
      </Button>
    </div>
  );
};
export default Pagination;
