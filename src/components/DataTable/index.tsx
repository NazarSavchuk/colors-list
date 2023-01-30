import React from "react";
import { useSelector } from "react-redux";
import { fetchColors } from "../../redux/colors/asyncAction";
import { selectColorData } from "../../redux/colors/selectors";
import { useAppDispatch } from "../../redux/store";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  id: number,
  name: string,
  year: number,
  color: string,
  pantone_value: string
) {
  return { id, name, year, color, pantone_value };
}

const DataTable = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectColorData);
  const rows: any = [];

  if (status === "success") {
    items.data.map((item: any) => {
      rows.push(
        createData(
          item.id,
          item.name,
          item.year,
          item.color,
          item.pantone_value
        )
      );
    });
  }

  React.useEffect(() => {
    const getColors = (async function () {
      dispatch(fetchColors({ page: 3 }));
    })();
  }, []);

  return (
    <div>
      {status === "loading" && <>Loading</>}
      {status === "success" && rows ? (
        <>
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
                {rows.map((row: any) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      backgroundColor: `${row.color}`,
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
      ) : (
        <>Error</>
      )}
    </div>
  );
};

export default DataTable;
