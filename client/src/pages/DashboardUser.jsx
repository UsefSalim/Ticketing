import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTickets } from "../redux/slices/Ticket.slice";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
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

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
function DashboardUser(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() =>
  {
    dispatch(allTickets());
  }, [dispatch]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { Ticket } = useSelector((state) => state.tickets);
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
                      {/* <Typography paragraph>
                        <b> Cree par </b>: {tiket.id_user.name}
                      </Typography> */}
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

export default DashboardUser;
