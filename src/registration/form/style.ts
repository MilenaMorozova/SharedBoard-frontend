import COLORS from '../../colors';
import FONTS from '../../fonts';

const WIDTH = 510;

export const SignFormStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  padding: '15px 20px',
  gap: '20px',

  position: 'relative' as 'relative',
  width: WIDTH,

  background: 'white',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
  borderRadius: '6px',

  justifyContent: 'space-between',
};

export const ForgotPasswordStyle = {
  position: 'relative' as 'relative',
  float: 'right' as 'right',
  color: COLORS.TEXT_BLUE,
  ...FONTS.BODY,
};

export const FullWidthStyle = {
  width: '100%',
};

export const LoginErrorBlockStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  color: COLORS.TEXT_RED,
};
