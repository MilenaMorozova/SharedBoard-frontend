import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import Board from '../../entities/board';
import BoardType from '../../entities/board-type';
import { useAppSelector } from '../../store/hooks';
import { ActionTableCell, CustomTableCell, DateTimeTableCell } from './board-table-cell';
import BoardTypeChip from './board-type-chip';
import { HeaderCellStyle } from './style';


const HEADERS = ['Type', 'Board name', 'Owner', 'Created', 'Updated', ' '];

function BoardTable() {
  const userBoards: Array<Board> = useAppSelector(state => state.account.boards);

  function TableContent() {
    let content;

    if (userBoards.length === 0) {
      content = (
        <TableRow>
          <CustomTableCell colSpan={HEADERS.length}>No boards</CustomTableCell>
        </TableRow>
      );
    } else {
      content = userBoards.map((board) => (
        <TableRow hover key={board.id}>
          <CustomTableCell>
            <BoardTypeChip boardType={BoardType.KANBAN} />
          </CustomTableCell>
          <CustomTableCell>
            {board.boardName}
          </CustomTableCell>
          <CustomTableCell>
            {board.owner.username}
          </CustomTableCell>
          <DateTimeTableCell date="02.02.2022" time="13:34" />
          <DateTimeTableCell date="03.03.2002" time="16:34" />
          <ActionTableCell />
        </TableRow>
      ));
    }

    return (
      <TableBody>
        {content}
      </TableBody>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
      <Table>
        <TableHead>
          <TableRow>
            {HEADERS.map((header) => (
              <TableCell key={header} sx={HeaderCellStyle}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableContent />
      </Table>
    </TableContainer>
  );
}


export default BoardTable;
