import { Button, ButtonProps } from '@mui/material';
import { Component } from 'react';
import BoardButtonStyle from './style';


class BoardButton extends Component<ButtonProps> {
  render() {
    return (
      <Button
        className="board-button"
        fullWidth
        {...this.props}
        sx={{ ...BoardButtonStyle, ...this.props.sx }}
      />
    );
  }
}

export default BoardButton;
