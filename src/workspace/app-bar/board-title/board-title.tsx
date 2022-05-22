import BoardIcon from '../../../custom-mui-components/icon/board-icon';
import BoardType from '../../../entities/board-type';
import { BoardIconStyle, BoardNameStyle, BoardTitleStyle } from './style';


type BoardTitleProps = {
    boardType: BoardType,
}

function BoardTitle(props: BoardTitleProps) {
  return (
    <div style={BoardTitleStyle}>
      <BoardIcon boardType={props.boardType} sx={BoardIconStyle} />
      <span style={BoardNameStyle}>Untitled</span>
    </div>
  );
}

export default BoardTitle;
