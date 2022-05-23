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
    const { ...other } = this.props; // eslint-disable-line @typescript-eslint/no-unused-vars

    return (
      <TextField
        className="board-text-field"
        type="text"
        fullWidth
        variant="outlined"
        margin="dense"
        {...other}
        sx={{ ...BoardTextFieldStyle, ...this.props.sx }}
      />
    );
  }

  ErrorTextField() {
    const { errorText, ...other } = this.props;

    return (
      <TextField
        className="board-error-text-field"
        type="text"
        fullWidth
        variant="outlined"
        margin="dense"
        error
        helperText={errorText}
        {...other}
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
