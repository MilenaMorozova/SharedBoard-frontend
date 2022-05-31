import COLORS from '../../../colors';

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
