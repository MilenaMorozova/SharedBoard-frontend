import COLORS from '../../colors';

export const IconButtonStyle = {
  color: COLORS.TEXT_DARK_BLUE,
};

export const ActionPanelStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  gap: '20px',
  padding: '4px',

  backgroundColor: COLORS.BACKGROUND_WHITE,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',

  position: 'absolute' as 'absolute',
  zIndex: 11,
  left: '30px',
  top: '260px',
};
