import { Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ReactNode } from 'react';
import {
  AddIconStyle, BoardIconStyle, CardBoardInfoStyle, CardDescriptionTextStyle, CardHeaderTextStyle,
  CreateBoardBlockStyle, CreateBoardCardStyle,
} from './style';
import BoardIcon from '../../custom-mui-components/icon/board-icon';
import BoardType from '../../entities/board/board-type';

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
        boardIcon={<BoardIcon boardType={BoardType.KANBAN} sx={BoardIconStyle} />}
      />
      <CreateBoardCard
        boardName="Board for notes"
        boardDescription="Create board for notes"
        boardIcon={<BoardIcon boardType={BoardType.NOTES} sx={BoardIconStyle} />}
      />
    </div>
  );
}

export default CreateBoardsBlock;
