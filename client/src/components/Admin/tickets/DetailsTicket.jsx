import React from 'react'
import { getOneTicket } from '../../../redux/slices/Ticket.slice'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
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
function DetailsTicket({ id })
{
    const classes = useStyles()
  const dispatch = useDispatch()
  React.useEffect(() =>
  {
    dispatch(getOneTicket(id))
  }, [dispatch])
  const { OneTicket: { ticket, historique } } = useSelector(state => state.tickets)
  console.log(historique);
  return (
    <Card className={classes.root}>
      {ticket
        && (
          <>
            <p><b>Titre</b>  :{ticket.titre}</p>
            <p><b>Type</b>  :{ticket.type}</p>
            <p><b>Crée le </b> :{ticket.date}</p>
            <p><b>Etat Acctuele</b> :{ticket.etat}</p>
            <p><b>Niveau</b> :{ticket.urgence}</p>
            <p><b>Crée par</b> : {ticket.id_user.name}</p>
            {historique.length > 0
              && (
                historique.map((his,index) => (
                  <div key={index}>
                    <p> {his.etat_initial} :{his.date_creation} a: {his.id_tech.name}</p>
                    {his.date_modification
                      && <p> {his.etat} : {his.date_modification}  par : {his.id_tech.name}</p>
                    }
                  </div>
                ))
              )
            }
          </>
        )
      }
     </Card>
  )
}

export default DetailsTicket
