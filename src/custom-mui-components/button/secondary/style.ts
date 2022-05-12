import COLORS from '../../../colors';

export const SecondaryButtonStyle = {
  backgroundColor: COLORS.BACKGROUND_WHITE,
  borderColor: COLORS.BUTTON_BLUE,
  '&:hover': {
    backgroundColor: 'inherit',
  },
};

export const ErrorButtonStyle = {
  color: COLORS.TEXT_RED,
  backgroundColor: COLORS.BACKGROUND_WHITE,
  borderColor: COLORS.TEXT_RED,
  '&:hover': {
    borderColor: COLORS.TEXT_RED,
    backgroundColor: 'inherit',
  },
};
