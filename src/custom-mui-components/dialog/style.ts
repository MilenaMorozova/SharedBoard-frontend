import COLORS from '../../colors';
import FONTS from '../../fonts';

export const DialogTitleStyle = {
  cursor: 'move',
  padding: '0px',
};

export const TopDialogStyle = {
  display: 'flex',
  flexDirection: 'row' as 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 15px 10px 15px',
};

export const DialogContentStyle = {
  padding: '0px 45px 20px 45px',
};

export const DialogActionsStyle = {
  padding: '0px 15px 10px 15px',
};

export const DialogTitleWithIconStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row' as 'row',
  gap: '5px',

  ...FONTS.H2,
  color: COLORS.TEXT_DARK_GRAY,
};

const CLOSE_ICON_SIZE = '20px';

export const CloseIconStyle = {
  width: CLOSE_ICON_SIZE,
  height: CLOSE_ICON_SIZE,
};

export const CloseButtonIconStyle = {
  cursor: 'pointer',
  float: 'right',
  color: COLORS.ICON_LIGHT_GRAY,
};
