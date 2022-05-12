import COLORS from '../../colors';
import FONTS from '../../fonts';

export const CreateBoardCardStyle = {
  textTransform: 'none',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',
  padding: '10px 20px',
  
  background: COLORS.BACKGROUND_WHITE,
};

export const CardBoardInfoStyle = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'flex-start',
  gap: '5px',
};

export const CardHeaderTextStyle = {
  color: COLORS.TEXT_DARK_GRAY,
  ...FONTS.H3,
};

export const CardDescriptionTextStyle = {
  color: COLORS.TEXT_GRAY,
  ...FONTS.BODY,
};

export const AddIconStyle = {
  color: COLORS.TEXT_DARK_GRAY,
};

export const BoardIconStyle = {
  width: '34px',
  height: '34px',
};

export const CreateBoardBlockStyle = {
  display: 'flex',
  flexDirection: 'row' as 'row',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '25px',
};
