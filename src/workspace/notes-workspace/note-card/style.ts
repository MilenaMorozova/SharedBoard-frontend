import COLORS from '../../../colors';
import FONTS from '../../../fonts';

export const NoteCardStyle = {
  display: 'flex',
  flexDirection: 'row' as 'row',

  position: 'absolute' as 'absolute',
  left: '186px',
  top: '213px',
};

export const StripeStyle = {
  minWidth: '7px',
  borderRadius: '10px 0px 0px 10px',
};

export const NoteContentStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '20px',
  backgroundColor: COLORS.BACKGROUND_WHITE,
  width: '290px',

  padding: '10px 15px',
  border: '1px solid #F4EDEF',
  borderRadius: '0px 10px 10px 0px',
};

export const ExpandButonStyle = {
  textTransform: 'none',
  color: COLORS.TEXT_DARK_GRAY,
  justifyContent: 'flex-start',
  padding: '4px 0px',
};

export const DescriptionBlockStyle = {
  color: COLORS.TEXT_DARK_GRAY,
  ...FONTS.BODY,
};
