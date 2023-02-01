import React from "react";
import styles from "./VisiblePopup.module.scss";
import CloseIcon from "@mui/icons-material/Close";

export type VisiblePopupProps = {
  setIsVisiblePopup: React.Dispatch<React.SetStateAction<boolean>>;
  props: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };
};

const VisiblePopup: React.FC<VisiblePopupProps> = (params) => {
  return (
    <div className={styles.visiblePopup}>
      <CloseIcon
        onClick={() => {
          params.setIsVisiblePopup(false);
        }}
      />
      <div
        className={styles.colorExample}
        style={{ backgroundColor: `${params.props.color}` }}></div>
      <div className={styles.propsList}>
        <ul>
          <li>id = {params.props.id}</li>
          <li>name = {params.props.name}</li>
          <li>year = {params.props.year}</li>
          <li>color = {params.props.color}</li>
          <li>pantone_value = {params.props.pantone_value}</li>
        </ul>
      </div>
    </div>
  );
};

export default VisiblePopup;
