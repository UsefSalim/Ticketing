import React from 'React'
import ShareIcon from "@material-ui/icons/Share";
import DetailsTicket from '../Admin/tickets/DetailsTicket'
import Affectation from "../Admin/tickets/Affectation";
import IconButton from "@material-ui/core/IconButton";
import Popup from "reactjs-popup";
import PostAddIcon from '@material-ui/icons/PostAdd';

export const UpdatePopup = (id, etat, Techniciens) =>
  etat === "en attent"  && (
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
  ) 

export const ReaffecterPopup = (id, etat, Techniciens) =>
  etat === "refusé" && (
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
  ) 



export const DetailsPopup = (id) => (
  <Popup
    trigger={
      <IconButton aria-label="share" color="primary">
        <PostAddIcon />
      </IconButton>
    }
    nested
    modal
  >
    {(close) => <DetailsTicket close={close} id={id}/>}
  </Popup>

  )
