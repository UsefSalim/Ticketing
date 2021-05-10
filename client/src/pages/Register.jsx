import React from "react";
import { useFormik } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import * as yup from "yup";
import Alert from "@material-ui/lab/Alert";
import { allDepartements } from "../redux/slices/Departement.slice";
import { getRegister } from "../redux/slices/authSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = yup.object({
  name: yup
    .string("Enter your Name")
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  role: yup.mixed().oneOf(["Admin", "User", "Tech"]),
  id_departement: yup.string("Choise One of departement"),
});
export default function Register() {
  const classes = useStyles();
  const { registerError } = useSelector((state) => state.authentification);
  const { Departement } = useSelector((state) => state.departement);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      id_departement: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(getRegister(values)) 
    },
  });
  React.useEffect(() => {
    dispatch(allDepartements());
  }, [dispatch]);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            onSubmit={formik.handleSubmit}
            noValidate
          >
            {registerError && <Alert color="error">{registerError}</Alert>}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label=" Name"
                  name="name"
                  autoComplete="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="role"
                  label="Role"
                  select
                  id="role"
                  autoComplete="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                  helperText={formik.touched.role && formik.errors.role}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Tech">Technicien</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="id_departement"
                  label="Departement"
                  select
                  SelectProps={{
                    native: true,
                  }}
                  id="id_departement"
                  autoComplete="id_departement"
                  value={formik.values.id_departement}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.id_departement &&
                    Boolean(formik.errors.id_departement)
                  }
                  helperText={
                    formik.touched.id_departement &&
                    formik.errors.id_departement
                  }
                >
                  <option value="" />
                  {Departement.length > 0 &&
                    Departement.map((dep) => (
                      <>
                        <option key={dep._id} value={dep._id}>
                          {dep.nom}
                        </option>
                      </>
                    ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // disabled={loading}
              className={classes.submit}
              // onClick={()=>{setLoding(!loding)}}
            >
              Sign Up
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
