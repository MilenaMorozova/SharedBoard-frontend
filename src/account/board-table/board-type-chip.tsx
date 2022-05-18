import { Chip } from '@mui/material';
import BoardType from '../../entities/board-type';
import { BoardChipStyle, BoardChipTextStyle } from './style';


type BoardTypeChipProps = {
    boardType: BoardType,
}

function BoardTypeChip(props: BoardTypeChipProps) {
  const style = BoardChipStyle[props.boardType];

  return (
    <Chip label={style.label} sx={{ ...BoardChipTextStyle, ...style }} />
  );
}

export default BoardTypeChip;
