import COLORS from '../../../colors';
import FONTS from '../../../fonts';

export const AccessSelectStyle = {
  color: COLORS.TEXT_GRAY,
  ...FONTS.BODY,
  paddingTop: '6px',
  marginLeft: "10px"
};

export const AccessFormControlStyle = {
  minWidth: '90px',
};

export const MenuItemStyle = {
  color: COLORS.TEXT_DARK_GRAY,
  ...FONTS.BODY,
};

export const ParticipantRowStyle = {
  width: '95%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px 0px',
};

export const ParticipantAvatarStyle = {
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
};

export const UsernameStyle = {
  color: COLORS.TEXT_DARK_GRAY,
  ...FONTS.BODY,
};

export const CurrentUserAccessStyle = {
  color: COLORS.TEXT_GRAY,
  ...FONTS.BODY,
  alignSelf: 'center',
  paddingRight: '34px',
};

export const DialogContextStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '20px',
};
