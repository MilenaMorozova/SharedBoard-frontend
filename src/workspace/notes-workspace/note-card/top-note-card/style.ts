import COLORS from '../../../../colors';
import FONTS from '../../../../fonts';

const ChipTextStyle = {
  ...FONTS.SUBTITLE,
};

export const DateRowStyle = {
  ...FONTS.SUBTITLE,
  color: COLORS.TEXT_GRAY,
};

export const TopNoteCardStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '10px',
};

export const CardTitleTextStyle = {
  ...FONTS.H3,
  color: COLORS.TEXT_DARK_GRAY,
};

export const CardTitleStyle = {
  display: 'flex',
  flexDirection: 'row' as 'row',
  alignItems: 'flex-start',
  gap: '10px',
};

export default ChipTextStyle;
