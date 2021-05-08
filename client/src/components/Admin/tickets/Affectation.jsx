import React from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { updateTicket } from "../../../redux/slices/Ticket.slice";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    padding: "32px",
    backgroundColor: "#F7FAFB",
  },
  alert: {
    margin: "8px 0",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Affectation(props) {
  let etat;
  props.reafecter ? (etat = "reafecté") : (etat = "affecté");
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, id } = props;
  const formik = useFormik({
    initialValues: {
      id_tech: data[0]._id,
    },
    onSubmit: (values) => {
      dispatch(updateTicket({ values, id, type: "admin", etat }));
    },
  });
  return (
    <Card className={classes.root}>
      <form
        action=""
        className={classes.form}
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <TextField
          variant="outlined"
          required
          fullWidth
          name="id_tech"
          label="Technicien"
          select
          SelectProps={{
            native: true,
          }}
          id="id_tech"
          autoComplete="id_tech"
          value={formik.values.id_tech}
          onChange={formik.handleChange}
        >
          {data.length > 0 &&
            data.map((dep) => (
              <>
                <option key={dep._id} value={dep._id}>
                  {dep.name}
                </option>
              </>
            ))}
        </TextField>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add
        </Button>
      </form>
    </Card>
  );
}

export default Affectation;
