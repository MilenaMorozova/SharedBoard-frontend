import { TextField, TextFieldProps } from '@mui/material';
import { Component } from 'react';
import { TEXT_DARK_BLUE, TEXT_DARK_GRAY, TEXT_GRAY } from '../colors';
import FONTS from '../fonts';

const BoardInputLabelStyle = {
  '& .MuiInputLabel-root': {
    color: TEXT_DARK_GRAY,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: TEXT_DARK_BLUE,
  },
};

const BoardTextFieldStyle = {
  height: 50,
  '& input': {
    color: TEXT_DARK_GRAY,
    ...FONTS.BODY,
  },
  '& fieldset': {
    borderColor: TEXT_GRAY,
  },
  '& .Mui-focused fieldset': {
    borderColor: `${TEXT_DARK_BLUE} !important`,
  },
  marginTop: '12px',
  ...BoardInputLabelStyle,
};


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
