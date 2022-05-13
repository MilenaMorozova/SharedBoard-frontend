import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import BoardType from '../../entities/board-type';
import BoardTypeChip from './board-type-chip';
import { HeaderCellStyle } from './style';

const HEADERS = ['Type', 'Board name', 'Owner', 'Created', 'Updated', ''];
function BoardTable() {
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
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <BoardTypeChip boardType={BoardType.KANBAN} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BoardTable;
