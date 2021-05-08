import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Popup from "reactjs-popup";
import AddIcon from "@material-ui/icons/Add";
import UpdateIcon from "@material-ui/icons/Update";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import {
  allDepartements,
  deleteDepartement,
} from "../../../redux/slices/Departement.slice";
import UpdateDepartement from "./UpdateDepartement";
import AddDepartement from "./AddDepartement";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { Departement } = useSelector((state) => state.departement);
  React.useEffect(() => {
    dispatch(allDepartements());
  }, [dispatch]);
  const handelDelete = (id) => {
    dispatch(deleteDepartement(id));
  };
  const AddPopup = () => (
    <Popup
      trigger={
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddIcon />}
        >
          Add
        </Button>
      }
      nested
      modal
    >
      {(close) => <AddDepartement close={close} />}
    </Popup>
  );
  const UpdatePopup = (data) => (
    <Popup
      trigger={
        <Button
          variant="contained"
          color="success"
          className={classes.button}
          startIcon={<UpdateIcon />}
          size="small"
        >
          Update
        </Button>
      }
      nested
      modal
    >
      {(close) => <UpdateDepartement close={close} data={data} />}
    </Popup>
  );
  return (
    <Container>
      <Typography variant="h2" component="h2">
        Departements
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell align="right">Responsable</TableCell>
              <TableCell align="right">Activite</TableCell>
              <TableCell align="right">Udpade</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Departement.length > 0 &&
              Departement.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.nom}
                  </TableCell>
                  <TableCell align="right">{row.responsable}</TableCell>
                  <TableCell align="right">{row.activite}</TableCell>
                  <TableCell align="right">{UpdatePopup(row)}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                      size="small"
                      onClick={() => {
                        handelDelete(row._id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {AddPopup()}
    </Container>
  );
}
