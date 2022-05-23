import { useState } from 'react';
import BoardIcon from '../../../custom-mui-components/icon/board-icon';
import EditableText from '../../../custom-mui-components/text-fields/editable-text/editable-text';
import BoardType from '../../../entities/board-type';
import { BoardIconStyle, BoardNameStyle, BoardTitleStyle } from './style';


type BoardTitleProps = {
  boardType: BoardType,
}

function BoardTitle(props: BoardTitleProps) {
  const [value, setValue] = useState('Untitled');

  const onSave = () => {};

  return (
    <div style={BoardTitleStyle}>
      <BoardIcon
        boardType={props.boardType}
        sx={BoardIconStyle}
      />
      <EditableText
        value={value}
        setValue={setValue}
        onSave={onSave}
        width="100px"
        textStyle={BoardNameStyle}
      />
    </div>
  );
}

export default BoardTitle;
