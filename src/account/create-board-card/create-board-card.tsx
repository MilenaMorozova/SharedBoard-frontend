import { Button } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import { ReactNode } from 'react';
import {
  AddIconStyle, BoardIconStyle, CardBoardInfoStyle, CardDescriptionTextStyle, CardHeaderTextStyle,
  CreateBoardBlockStyle,
  CreateBoardCardStyle,
} from './style';
import COLORS from '../../colors';

function CreateBoardCard(props: {boardName: string, boardDescription: string, boardIcon: ReactNode}) {
  return (
    <Button
      startIcon={props.boardIcon}
      endIcon={<AddOutlinedIcon sx={AddIconStyle} />}
      sx={CreateBoardCardStyle}
    >
      <div style={CardBoardInfoStyle}>
        <div style={CardHeaderTextStyle}>New {props.boardName}</div>
        <div style={CardDescriptionTextStyle}>{props.boardDescription}</div>
      </div>
    </Button>
  );
}

function CreateBoardsBlock() {
  return (
    <div style={CreateBoardBlockStyle}>
      <CreateBoardCard
        boardName="Kanban Board"
        boardDescription="Create template board for such propose"
        boardIcon={<DashboardOutlinedIcon sx={{ ...BoardIconStyle, color: COLORS.ICON_PURPLE }} />}
      />
      <CreateBoardCard
        boardName="Board for notes"
        boardDescription="Create board for notes"
        boardIcon={<StickyNote2OutlinedIcon sx={{ ...BoardIconStyle, color: COLORS.ICON_BLUE }} />}
      />
    </div>
  );
}

export default CreateBoardsBlock;
