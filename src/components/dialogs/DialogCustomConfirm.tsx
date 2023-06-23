import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Button, DialogActions, DialogContentText } from '@mui/material';

const DialogCustomConfirm = ({ open, setOpen, title, content, handleConfirm }: any) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => handleConfirm(false)}>Cancelar</Button>
        <Button variant="contained" onClick={() => handleConfirm(true)}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogCustomConfirm;
