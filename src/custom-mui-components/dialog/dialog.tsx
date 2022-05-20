import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import React, { ReactNode } from 'react';
import { DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  CloseButtonIconStyle, CloseIconStyle, DialogActionsStyle,
  DialogContentStyle, DialogTitleStyle, DialogTitleWithIconStyle, TopDialogStyle,
} from './style';


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
      <DialogTitle sx={DialogTitleStyle} id="draggable-dialog-title">
        <div style={TopDialogStyle}>
          <div style={DialogTitleWithIconStyle}>
            {props.titleIcon}
            {props.title}
          </div>
          <IconButton onClick={props.onClose} sx={CloseButtonIconStyle}>
            <CloseIcon sx={CloseIconStyle} />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent sx={DialogContentStyle}>
        {props.children}
      </DialogContent>
      <DialogActions sx={DialogActionsStyle}>
        {props.actionPanel}
      </DialogActions>
    </Dialog>
  );
}
