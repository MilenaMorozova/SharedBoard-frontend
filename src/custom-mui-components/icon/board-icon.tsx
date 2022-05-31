import { SxProps, Theme } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import BoardType from '../../entities/board/board-type';
import { KanbanBoardIconStyle, NoteBoardIconStyle } from './style';


type BoardIconProps = {
    boardType: BoardType,
    sx: SxProps<Theme>,
}

function BoardIcon(props: BoardIconProps) {
  let icon;

  switch (props.boardType) {
    case BoardType.KANBAN:
      icon = <DashboardOutlinedIcon sx={{ ...KanbanBoardIconStyle, ...props.sx }} />;
      break;
    case BoardType.NOTES:
      icon = <StickyNote2OutlinedIcon sx={{ ...NoteBoardIconStyle, ...props.sx }} />;
      break;
    default:
      icon = null;
      break;
  }

  return icon;
}

export default BoardIcon;
