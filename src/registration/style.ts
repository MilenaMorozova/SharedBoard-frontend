import COLORS from '../colors';
import FONTS from '../fonts';

export const FlexColumnCenterStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
};

export const SignInPageStyle = {
  backgroundColor: COLORS.BACKGOUND_LIGHT_BLUE,
  height: '100vh',
  ...FlexColumnCenterStyle,
};

export const LogoTextStyle = {
  color: COLORS.TEXT_DARK_BLUE,
  ...FONTS.H1,
};

export const LogoBlockStyle = {
  ...FlexColumnCenterStyle,
  gap: '15px',
  marginTop: '50px',
  marginBottom: '60px',

  ...LogoTextStyle,
};

export const EmailActivationPageStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  width: '100%',
  alignItems: 'center',
};

export const EmailIconWithTextBlockStyle = {
  display: 'flex',
  flexDirection: 'row' as 'row',
  gap: '10px',
  marginTop: '150px',
  alignItems: 'center',
};

export const EmailIconStyle = {
  height: 200,
  width: 'auto',
  color: COLORS.TEXT_DARK_BLUE,
};

export const EmailTextBlock = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '20px',
};

export const EmailActivationTitleStyle = {
  ...FONTS.EMAIL_ACTIVATE_TITLE,
  color: COLORS.TEXT_DARK_GRAY,
};

export const EmailActivationTextStyle = {
  ...FONTS.H1,
  color: COLORS.TEXT_GRAY,
};
