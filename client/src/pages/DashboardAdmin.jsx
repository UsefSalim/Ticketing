import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allTickets,
  deleteTicket,
  allTechnicient,
} from "../redux/slices/Ticket.slice";
import { makeStyles } from "@material-ui/core/styles";
import Popup from "reactjs-popup";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Affectation from "../components/Admin/tickets/Affectation";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function DashboardAdmin(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(allTickets());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(allTechnicient());
  }, [dispatch]);
  const { Ticket, Techniciens } = useSelector((state) => state.tickets);
  const handelDelete = (id) => {
    dispatch(deleteTicket(id));
  };
  const UpdatePopup = (id, etat) =>
    etat === "en attent" ? (
      <Popup
        trigger={
          <IconButton aria-label="share" color="primary">
            <ShareIcon />
          </IconButton>
        }
        nested
        modal
      >
        {(close) => <Affectation close={close} data={Techniciens} id={id} />}
      </Popup>
    ) : null;
  const ReaffecterPopup = (id, etat) =>
    etat === "refusé" ? (
      <Popup
        trigger={
          <IconButton aria-label="share" color="primary">
            <ShareIcon />
          </IconButton>
        }
        nested
        modal
      >
        {(close) => (
          <Affectation
            close={close}
            data={Techniciens}
            id={id}
            reafecter={true}
          />
        )}
      </Popup>
    ) : null;
  return (
    <Container>
      <Box my={3}>
        <Grid container spacing={3}>
          {Ticket.length > 0 &&
            Ticket.map((tiket) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {tiket.urgence === "normal"
                          ? "N"
                          : tiket.urgence === "urgent"
                          ? "U"
                          : "T"}
                      </Avatar>
                    }
                    title={tiket.titre}
                    subheader={tiket.date}
                  />

                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Type</b> : {tiket.type}
                    </Typography>
                    <hr />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Etat</b> : {tiket.etat}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="add to favorites"
                      color="danger"
                      onClick={() => {
                        handelDelete(tiket._id);
                      }}
                    >
                      <HighlightOffOutlinedIcon />
                    </IconButton>
                    {UpdatePopup(tiket._id, tiket.etat)}
                    {ReaffecterPopup(tiket._id, tiket.etat)}
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>
                        <b>Description</b> : {tiket.description}
                      </Typography>
                      <Typography paragraph>
                        <b> Cree par </b>: {tiket.id_user.name}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default DashboardAdmin;
