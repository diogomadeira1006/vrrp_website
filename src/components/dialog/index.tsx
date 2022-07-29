// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

export default function AlertDialog({ openModal }) {
  console.log("openModal", openModal);
  //   const [open, setOpen] = React.useState(true);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      <Dialog
        open={openModal}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          A tua candidatura foi enviada com sucesso!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            O resultado será enviado por email, seja ele positivo ou negativo.
            Obrigado pela preferência!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button
            component="a"
            href="https://www.vidareal-rp-portugal.pt/"
            autoFocus
          >
            Concluir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
