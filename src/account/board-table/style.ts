import COLORS from '../../colors';
import BoardType from '../../entities/board/board-type';
import FONTS from '../../fonts';

export const HeaderCellStyle = {
  textAlign: 'center',
  backgroundColor: COLORS.TABLE_HEADER_GRAY,
  color: COLORS.TEXT_DARK_GRAY,
};

export const BoardChipTextStyle = {
  ...FONTS.BODY,
};

export const BoardChipStyle = {
  [BoardType.KANBAN]: {
    color: COLORS.CHIP_LABEL_PURPLE,
    backgroundColor: COLORS.CHIP_LIGHT_PURPLE,
    label: 'Kanban',
  },
  [BoardType.NOTES]: {
    color: COLORS.CHIP_LABEL_BLUE,
    backgroundColor: COLORS.CHIP_LIGHT_BLUE,
    label: 'Notes',
  },
};

export const DateTimeTableCellStyle = {
  display: 'flex',
  justifyContent: 'center' as 'center',
  textAlign: 'left' as 'left',
};

export const TableCellStyle = {
  color: COLORS.TEXT_DARK_GRAY,
  ...FONTS.BODY,
};
