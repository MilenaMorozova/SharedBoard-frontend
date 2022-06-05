import { useState } from 'react';
import BoardIcon from '../../../custom-mui-components/icon/board-icon';
import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import BoardType from '../../../entities/board/board-type';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { BoardIconStyle, BoardNameStyle, BoardTitleStyle } from './style';
import { setBoardName } from '../../workspaceSlice';
import { changeBoardName } from '../../../service/websocket/websocket-sender';
import Access from '../../../entities/user/access';

type BoardTitleProps = {
  boardType: BoardType,
}

function BoardTitle(props: BoardTitleProps) {
  const boardName = useAppSelector(state => state.workspace.board.name);
  const currentUserAccess = useAppSelector(state => state.workspace.currentUser.access);
  const dispatch = useAppDispatch();

  const onSave = () => {
    changeBoardName(boardName);
  };

  const setValue = (name: string) => {
    dispatch(setBoardName(name));
  }

  const setDisabled = () => {
    return currentUserAccess === Access.VIEWER;
  }

  const getValue = (text: string) => {
    if (text.length > 9) {
      return `${text.slice(0, 7)}...`;
    }
    return text;
  };

  return (
    <div style={BoardTitleStyle}>
      <BoardIcon
        boardType={props.boardType}
        sx={BoardIconStyle}
      />
      <EditableText
        value={boardName}
        setValue={setValue}
        disabled={setDisabled()}
        onSave={onSave}
        getValue={getValue}
        width="100px"
        textStyle={BoardNameStyle}
      />
    </div>
  );
}

export default BoardTitle;
