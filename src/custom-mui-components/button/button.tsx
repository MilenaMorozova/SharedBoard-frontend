import { Button, ButtonProps } from '@mui/material';
import { Component } from 'react';
import BoardButtonStyle from './style';


class BoardButton extends Component<ButtonProps> {
  render() {
    return <Button {...this.props} fullWidth className="board-button" sx={{ ...BoardButtonStyle, ...this.props.sx }} />;
  }
}

export default BoardButton;
