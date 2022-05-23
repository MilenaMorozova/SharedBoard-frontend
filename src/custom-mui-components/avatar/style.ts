import COLORS from '../../colors';
import FONTS from '../../fonts';

export const CircleStyle = {
  ...FONTS.BODY,

  display: 'flex',
  alignItems: 'center',
  borderRadius: '50%',
  width: 50,
  height: 50,

  color: COLORS.BACKGROUND_WHITE,
  border: '2px solid #FFFFFF',
};

export const TextStyle = {
  margin: 'auto',
};
