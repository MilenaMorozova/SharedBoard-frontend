import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ACCOUNT_CONTROLLER from '../../controller/AccountController';
import TableBoardItem from '../../entities/board/table-board-item';
import { useAppSelector } from '../../store/hooks';
import { selectBoards } from '../accountSlice';
import { ActionTableCell, CustomTableCell, DateTimeTableCell } from './board-table-cell';
import BoardTypeChip from './board-type-chip';
import { HeaderCellStyle } from './style';


const HEADERS = ['Type', 'Board name', 'Owner', 'Created', 'Updated', ' '];

function BoardTable() {
  const userBoards: Array<TableBoardItem> = useAppSelector(selectBoards);

  function TableContent() {
    let content;
    const navigate = useNavigate();

    const onOpenBoard = (boardId: string) => {
      ACCOUNT_CONTROLLER.getBoardUrl(boardId)
        .then((link) => navigate(link));
    };

    if (userBoards.length === 0) {
      content = (
        <TableRow>
          <CustomTableCell colSpan={HEADERS.length}>No boards</CustomTableCell>
        </TableRow>
      );
    } else {
      content = userBoards.map((board) => (
        <TableRow hover key={board.id} onClick={() => onOpenBoard(board.id)}>
          <CustomTableCell>
            <BoardTypeChip boardType={board.type} />
          </CustomTableCell>
          <CustomTableCell>
            {board.name}
          </CustomTableCell>
          <CustomTableCell>
            {board.owner.username}
          </CustomTableCell>
          <DateTimeTableCell date={board.createdDate} />
          <DateTimeTableCell date={board.updatedDate} />
          <ActionTableCell board={board} />
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
    <TableContainer id="AccountPage_BoardTable" component={Paper} sx={{ boxShadow: 0 }}>
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
