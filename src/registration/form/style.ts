import { TEXT_BLUE } from '../../colors';
import FONTS from '../../fonts';

const WIDTH = 510;

export const LoginFormStyle = {
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
  color: TEXT_BLUE,
  ...FONTS.BODY,
};
