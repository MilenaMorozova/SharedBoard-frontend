import COLORS from '../../../colors';
import FONTS from '../../../fonts';

const BOARD_ICON_SIZE = '40px';

export const BoardIconStyle = {
  minWidth: BOARD_ICON_SIZE,
  minHeight: BOARD_ICON_SIZE,
};

export const BoardNameStyle = {
  ...FONTS.H1,
  color: COLORS.TEXT_DARK_GRAY,

  width: '100px',
};

export const BoardTitleStyle = {
  display: 'flex',
  flexDirection: 'row' as'row',
  alignItems: 'center',
  gap: '10px',
};
