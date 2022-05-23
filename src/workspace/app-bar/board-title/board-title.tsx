import { useState } from 'react';
import BoardIcon from '../../../custom-mui-components/icon/board-icon';
import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import BoardType from '../../../entities/board/board-type';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { BoardIconStyle, BoardNameStyle, BoardTitleStyle } from './style';
import { setBoardName } from '../../workspaceSlice';

type BoardTitleProps = {
  boardType: BoardType,
}

function BoardTitle(props: BoardTitleProps) {
  const boardName = useAppSelector(state => state.workspace.board.name);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(boardName);

  const onSave = () => {
    dispatch(setBoardName(name));
  };

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
        value={name}
        setValue={setName}
        onSave={onSave}
        getValue={getValue}
        width="100px"
        textStyle={BoardNameStyle}
      />
    </div>
  );
}

export default BoardTitle;
