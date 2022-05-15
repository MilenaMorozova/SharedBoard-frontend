import {
  Paper, Table, TableBody, TableCell, TableCellProps, TableContainer, TableHead, TableRow,
} from '@mui/material';
import BoardType from '../../entities/board-type';
import { ActionTableCell, CustomTableCell, DateTimeTableCell } from './board-table-cell';
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
            <CustomTableCell>
              <BoardTypeChip boardType={BoardType.KANBAN} />
            </CustomTableCell>
            <CustomTableCell>
              Board name
            </CustomTableCell>
            <CustomTableCell>
              Milena Sergeevna
            </CustomTableCell>
            <DateTimeTableCell date="02.02.2022" time="13:34" />
            <DateTimeTableCell date="03.03.2002" time="16:34" />
            <ActionTableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BoardTable;
