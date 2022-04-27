import { Button, ButtonProps } from '@mui/material';
import { Component } from 'react';
import { BUTTON_BLUE } from '../colors';

const BoardButtonStyle = {
  backgroundColor: BUTTON_BLUE,
  boxShadow: 0,
  '&:hover': {
    backgroundColor: BUTTON_BLUE,
  },
};

class BoardButton extends Component<ButtonProps> {
  render() {
    return <Button {...this.props} fullWidth className="board-button" sx={{ ...BoardButtonStyle, ...this.props.sx }} />;
  }
}

export default BoardButton;
