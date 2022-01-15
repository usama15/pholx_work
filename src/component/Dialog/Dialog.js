import { Dialog,DialogTitle } from '@material-ui/core';
import React from 'react'

export const CustomDialog = (props) => {
  const { onClose, text, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{text}</DialogTitle>
    </Dialog>
  );
}
