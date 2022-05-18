import COLORS from '../../colors';
import FONTS from '../../fonts';

const ARROW_SIZE = '16px';
const AVATAR_SIZE = '80px';

const ColumnDirectionStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
};

export const AccountInfoRowStyle = {
  textTransform: 'none',
  width: '100%',
  color: COLORS.TEXT_DARK_GRAY,
};

export const ArrowStyle = {
  width: ARROW_SIZE,
  height: ARROW_SIZE,
  color: COLORS.TEXT_GRAY,
};

export const AccountCardStyle = {
  ...ColumnDirectionStyle,
  gap: '30px',

  width: '384px',
  alignItems: 'flex-start',
  padding: '15px 20px',

  background: 'white',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
  borderRadius: '6px',
};

export const AvatarBlockStyle = {
  ...ColumnDirectionStyle,
  gap: '20px',

  width: '100%',
  alignItems: 'center',
};

export const AvatarStyle = {
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  ...FONTS.AVATAR,
};

export const UsernameTextStyle = {
  ...FONTS.H1,
};

export const UsernameRowStyle = {
  alignItems: 'center',
};

export const UserFieldsBlockStyle = {
  ...ColumnDirectionStyle,
  gap: '17px',
  width: '100%',
};

export const UserFieldTextStyle = {
  ...FONTS.H3,
};

export const UserFieldRowStyle = {
  justifyContent: 'space-between',
};
