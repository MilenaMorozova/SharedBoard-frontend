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
  gap: '10px',
  backgroundColor: COLORS.BACKGROUND_WHITE,
  width: '290px',

  padding: '10px 15px',
  border: '1px solid',
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

export const CardColorStyle = {
  [COLORS.CHIP_LABEL_PURPLE]: COLORS.CHIP_LIGHT_PURPLE,
  [COLORS.CHIP_LABEL_BLUE]: COLORS.CHIP_LIGHT_BLUE,
  [COLORS.CHIP_LABEL_RED]: COLORS.CHIP_LIGHT_RED,
  [COLORS.CHIP_LABEL_YELLOW]: COLORS.CHIP_LIGHT_YELLOW,
};

export const ReferenceStyle = {
  color: COLORS.TEXT_DARK_GRAY,
  ...FONTS.BODY,
};

export const AvatarStyle = {
  position: 'absolute' as 'absolute',
  top: -30,
  width: '25px',
  height: '25px',
};

export const NoteBoardWhenSearchingStyle = {
  boxShadow: "0px 4px 12px",
  borderRadius: '10px',
}

export const SelectedNoteStyle = {
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  border: `2px dashed`,
}