import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import Board from '../../entities/board';
import BoardType from '../../entities/board-type';
import { ActionTableCell, CustomTableCell, DateTimeTableCell } from './board-table-cell';
import BoardTypeChip from './board-type-chip';
import { HeaderCellStyle } from './style';


const HEADERS = ['Type', 'Board name', 'Owner', 'Created', 'Updated', ' '];

function BoardTable() {
  const mockBoard = new Board();
  mockBoard.boardName = 'Board name';
  mockBoard.type = BoardType.KANBAN;
  mockBoard.createdDate = new Date('02.02.2020 13:45');
  mockBoard.updatedDate = new Date('03.03.2020 16:00');

  const userBoards: Array<Board> = [];

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
        <TableRow key={board.id}>
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
    <TableContainer component={Paper}>
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
