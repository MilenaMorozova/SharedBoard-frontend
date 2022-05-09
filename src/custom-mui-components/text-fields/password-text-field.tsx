import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton, InputAdornment } from '@mui/material';
import { Component } from 'react';
import BoardTextField, { BoardTextFieldProps } from './text-field';


type BoardPasswordTextFieldState = {
    showPassword: boolean;
}

class BoardPasswordTextField extends Component<BoardTextFieldProps, BoardPasswordTextFieldState> {
  constructor(props: BoardTextFieldProps) {
    super(props);
    this.state = { showPassword: false };

    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  }

  render() {
    const { ref, ...other } = this.props; // eslint-disable-line @typescript-eslint/no-unused-vars

    return (
      <BoardTextField
        {...other}
        className="board-password-text-field"
        type={this.state.showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment:
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                edge="end"
              >
                {this.state.showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
              </IconButton>
            </InputAdornment>,
        }}
      />
    );
  }
}

export default BoardPasswordTextField;
