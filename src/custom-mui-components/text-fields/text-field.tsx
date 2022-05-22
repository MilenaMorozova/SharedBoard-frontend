import { TextField, TextFieldProps } from '@mui/material';
import { Component } from 'react';
import { BoardTextFieldStyle, ErrorTextFieldStyle } from './style';


export type BoardTextFieldProps =
TextFieldProps & {
  errorText?: string|null,
}

class BoardTextField extends Component<BoardTextFieldProps> {
  static defaultProps = {
    errorText: null,
  };

  BaseTextField() {
    return (
      <TextField
        className="board-text-field"
        type="text"
        fullWidth
        variant="outlined"
        margin="dense"
        {...this.props}
        sx={{ ...BoardTextFieldStyle, ...this.props.sx }}
      />
    );
  }

  ErrorTextField() {
    return (
      <TextField
        className="board-error-text-field"
        type="text"
        fullWidth
        variant="outlined"
        margin="dense"
        error
        helperText={this.props.errorText}
        {...this.props}
        sx={{ ...ErrorTextFieldStyle, ...this.props.sx }}
      />
    );
  }

  render() {
    if (this.props.errorText === null) {
      return this.BaseTextField();
    }
    return this.ErrorTextField();
  }
}

export default BoardTextField;
