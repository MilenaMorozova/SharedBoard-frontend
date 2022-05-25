import COLORS from '../../../colors';
import FONTS from '../../../fonts';

export const MovedLeftAvatarStyle = {
  marginLeft: -10,
};

export const ParticipantsStyle = {
  display: 'flex',
  flexDirection: 'row' as 'row',
};

export const ParticipantsCounterStyle = {
  ...MovedLeftAvatarStyle,

  backgroundColor: COLORS.BACKGOUND_LIGHT_BLUE,
  color: COLORS.TEXT_GRAY,
};

export const AccessSelectStyle = {
  color: COLORS.TEXT_GRAY,
  ...FONTS.BODY,
  minWidth: '90px',
  paddingTop: '6px',
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
  paddingRight: '44px',
};

export const DialogContextStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '20px',
};
