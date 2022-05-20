import COLORS from '../../colors';
import FONTS from '../../fonts';

export const ContentTextStyle = {
  ...FONTS.BODY,
  color: COLORS.TEXT_GRAY,
};

export const TextFieldStyle = {
  minWidth: '450px',
};

export const TextFieldsStyle = {
  paddingTop: '5px',
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '15px',
};
