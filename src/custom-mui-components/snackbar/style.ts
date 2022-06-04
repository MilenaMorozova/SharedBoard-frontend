import COLORS from '../../colors';
import FONTS from '../../fonts';

const MARGIN_RIGHT = '20px';

export const NotificationStyle = {
  ...FONTS.H3,
  display: 'flex',
  width: 271,
  padding: '15px 20px',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
  borderRadius: '6px',
  backgroundColor: COLORS.TEXT_DARK_GRAY,
  color: COLORS.BACKGROUND_WHITE,
};

export const SnakbarSuccessStyle = {
  color: COLORS.SNACKBAR_ICON_GREEN,
  marginRight: MARGIN_RIGHT,
};

export const SnakbarErrorStyle = {
  color: COLORS.SNACKBAR_ICON_RED,
  marginRight: MARGIN_RIGHT,
};

export const SnakbarWarningStyle = {
  color: COLORS.SNACKBAR_ICON_ORANGE,
  marginRight: MARGIN_RIGHT,
};
