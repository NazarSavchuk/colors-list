import React from "react";
import { useSelector } from "react-redux";
import { fetchColors } from "../../redux/colors/asyncAction";
import { selectColorData } from "../../redux/colors/selectors";
import { useAppDispatch } from "../../redux/store";

import { selectFilter } from "../../redux/filter/selectors";

import NotFoundItem from "../NotFoundItem";
import VisiblePopup from "../VisiblePopup";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styles from "./DataTable.module.scss";
function createData(
  id: number,
  name: string,
  year: number,
  color: string,
  pantone_value: string
) {
  return { id, name, year, color, pantone_value };
}

type Row = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

const DataTable = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectColorData);
  const [isVisiblePopup, setIsVisiblePopup] = React.useState<boolean>(false);
  const [popupProps, setPopupProps] = React.useState<Row>({
    id: 1,
    name: "expamle",
    year: 2222,
    color: "#000000",
    pantone_value: "example",
  });
  const { searchId, page } = useSelector(selectFilter);

  const rows: Row[] | Row = [];
  let notFoundId = false;

  if (status === "success") {
    const data = Array.isArray(items.data) ? items.data : Array.of(items.data);

    if (data[0] !== undefined) {
      data.forEach((elem: Row) => {
        rows.push(
          createData(
            elem.id,
            elem.name,
            elem.year,
            elem.color,
            elem.pantone_value
          )
        );
      });
    } else {
      notFoundId = true;
    }
  }
  const props = {
    setIsVisiblePopup,
    props: popupProps,
  };
  React.useEffect(() => {
    const getColors = (async function () {
      dispatch(fetchColors({ page, searchId }));
    })();
  }, [page, searchId]);

  return (
    <div>
      {notFoundId ? (
        <NotFoundItem />
      ) : (
        <>
          <>{isVisiblePopup && <VisiblePopup {...props} />}</>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Year</TableCell>
                  <TableCell align="right">Color</TableCell>
                  <TableCell align="right">Pantone_value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: Row) => (
                  <TableRow
                    className={styles.tableRow}
                    key={row.name}
                    sx={{
                      backgroundColor: `${row.color}`,
                    }}
                    onClick={() => {
                      setIsVisiblePopup(true);
                      setPopupProps({
                        id: row.id,
                        name: row.name,
                        year: row.year,
                        color: row.color,
                        pantone_value: row.pantone_value,
                      });
                    }}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.year}</TableCell>
                    <TableCell align="right">{row.color}</TableCell>
                    <TableCell align="right">{row.pantone_value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default DataTable;
