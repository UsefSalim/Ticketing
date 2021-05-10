import React from "react";
import {Link ,NavLink} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getLogout } from "../redux/slices/authSlice";
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const { isAuthenticated, role } = useSelector(
    (state) => state.authentification
  );
  const dispatch = useDispatch();
  const handelLogout = (e) => {
    e.preventDefault();
    dispatch(getLogout());
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavLink exact activeClassName="current" to="/">Ticketing</NavLink>
          <Typography variant="h6" className={classes.title} />
          {isAuthenticated && role === "Admin" && (
            <>
              <NavLink exact activeClassName="current" to="/dashboard/register">
                <Button>register</Button>
              </NavLink>
              <NavLink exact activeClassName="current" to="/dashboard/departement">
                <Button>departement</Button>
              </NavLink>
              <NavLink exact activeClassName="current" to="/dashboard/admin/chart">
                <Button>Statistics</Button>
              </NavLink>
            </>
          )}
          {isAuthenticated && role === "User" && (
            <>
              <NavLink exact activeClassName="current" to="/dashboard/addtickets">
                <Button>add Ticket</Button>
              </NavLink>
            </>
          )}
          {isAuthenticated && (
            <>
              <NavLink exact activeClassName="current" to={`/dashboard/${role}`}>
                <Button>profile</Button>
              </NavLink>
              <Button onClick={handelLogout}>Logout</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
