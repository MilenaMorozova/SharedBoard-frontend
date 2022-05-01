import { TextField, TextFieldProps } from '@mui/material';
import { Component } from 'react';
import { BoardTextFieldStyle } from './style';


class BoardTextField extends Component<TextFieldProps> {
  render() {
    return (
      <TextField
        type="text"
        {...this.props}
        fullWidth
        variant="outlined"
        className="board-text-field"
        sx={{ ...BoardTextFieldStyle, ...this.props.sx }}
      />
    );
  }
}

export default BoardTextField;
