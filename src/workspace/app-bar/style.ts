import COLORS from '../../colors';

export const AppBarStyle = {
  color: COLORS.BACKGROUND_WHITE,
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',

  display: 'flex',
  flexDirection: 'row' as'row',
  justifyContent: "space-between",
  alignItems: 'center',
  padding: '14px 31px 14px 30px',
  // gap: '600px',
};

export const LeftSideStyle = {
  display: "flex", 
  flexDirection: "row" as'row',
  alignItems: 'center',
  gap: '420px',
};

export const RightSideStyle = {
  display: "flex", 
  flexDirection: "row" as'row',
  alignItems: 'center',
  gap: '30px',
};

export const ShareBoardButtonStyle = {
  height: "37px"
}

export const SearchFieldStyle = {
  width: '376px',
};
