import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import React, { ReactNode } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitleStyle } from './style';


function PaperComponent(props: PaperProps) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
      nodeRef={nodeRef}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

type DraggableDialogProps = {
    title: string,
    children: ReactNode,
    titleIcon: ReactNode,
    actionPanel: ReactNode,
    open: boolean,
    onClose: () => void,
}

export default function DraggableDialog(props: DraggableDialogProps) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={DialogTitleStyle} id="draggable-dialog-title">
        <div>
          <div>
            {props.titleIcon}
            {props.title}
          </div>
          <IconButton onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        {props.children}
      </DialogContent>
      <DialogActions>
        {props.actionPanel}
      </DialogActions>
    </Dialog>
  );
}
