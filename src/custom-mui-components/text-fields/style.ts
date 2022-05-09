import {
  TEXT_DARK_BLUE, TEXT_DARK_GRAY, TEXT_GRAY, TEXT_RED,
} from '../../colors';
import FONTS from '../../fonts';

export const BoardInputLabelStyle = {
  '& .MuiInputLabel-root': {
    color: TEXT_DARK_GRAY,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: TEXT_DARK_BLUE,
  },
};

export const BoardTextFieldStyle = {
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
  ...BoardInputLabelStyle,
};

export const errorInputLabelStyle = {
  '& .MuiInputLabel-root': {
    color: TEXT_RED,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: TEXT_RED,
  },
};

export const errorTextFieldStyle = {
  ...BoardTextFieldStyle,

  paddingBottom: '15px',
  '& .Mui-focused fieldset': {
    borderColor: `${TEXT_RED} !important`,
  },
  ...errorInputLabelStyle,
};
