import { BACKGOUND_LIGHT_BLUE, TEXT_DARK_BLUE } from '../colors';
import FONTS from '../fonts';

export const FlexColumnCenterStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
};

export const SignInPageStyle = {
  backgroundColor: BACKGOUND_LIGHT_BLUE,
  height: '100vh',
  ...FlexColumnCenterStyle,
};

export const LogoTextStyle = {
  color: TEXT_DARK_BLUE,
  ...FONTS.H1,
};

export const LogoBlockStyle = {
  ...FlexColumnCenterStyle,
  gap: '15px',
  marginTop: '50px',
  marginBottom: '60px',

  ...LogoTextStyle,
};
