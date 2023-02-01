import React from "react";
import { TextField } from "@mui/material";

import debounce from "lodash.debounce";
import { setSearchId } from "../../redux/filter/slice";
import { useAppDispatch } from "../../redux/store";
import styles from "./InputFiled.module.scss";

const InputField = () => {
  const [findId, setFindId] = React.useState<string>();

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setFindId(e.target.value);
      updateSearchValue(e.target.value);
    }
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchId(str));
    }, 900),
    []
  );

  return (
    <>
      <TextField
        className={styles.textField}
        label="ID"
        color="secondary"
        focused
        placeholder="Enter search ID"
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        value={findId}
      />
    </>
  );
};

export default InputField;
