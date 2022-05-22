
import COLORS from '../../colors';
import FONTS from '../../fonts';

export const BoardInputLabelStyle = {
  '& .MuiInputLabel-root': {
    color: COLORS.TEXT_DARK_GRAY,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: COLORS.TEXT_DARK_BLUE,
  },
};

export const BoardTextFieldStyle = {
  height: 50,
  '& input': {
    color: COLORS.TEXT_DARK_GRAY,
    ...FONTS.BODY,
  },
  '& fieldset': {
    borderColor: COLORS.TEXT_GRAY,
  },
  '& .Mui-focused fieldset': {
    borderColor: `${COLORS.TEXT_DARK_BLUE} !important`,
  },
  ...BoardInputLabelStyle,
};

export const ErrorInputLabelStyle = {
  '& .MuiInputLabel-root': {
    color: COLORS.TEXT_RED,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: COLORS.TEXT_RED,
  },
};

export const ErrorTextFieldStyle = {
  ...BoardTextFieldStyle,

  paddingBottom: '15px',
  '& .Mui-focused fieldset': {
    borderColor: `${COLORS.TEXT_RED} !important`,
  },
  ...ErrorInputLabelStyle,
};

export const SearchTextFieldStyle = {
  height: "50px"
};