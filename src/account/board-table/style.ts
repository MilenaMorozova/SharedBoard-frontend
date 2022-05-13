import COLORS from '../../colors';
import BoardType from '../../entities/board-type';
import FONTS from '../../fonts';

export const HeaderCellStyle = {
  textAlign: 'center',
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
