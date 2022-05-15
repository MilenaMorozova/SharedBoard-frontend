import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { ErrorButton, SecondaryButton } from '../../custom-mui-components/button/secondary/secondary-button';
import BoardType from '../../entities/board-type';
import { useAppSelector } from '../../store/hooks';
import BoardTypeChip from './board-type-chip';
import { HeaderCellStyle, DateTimeTableCellStyle, TableCellStyle } from './style';


const HEADERS = ['Type', 'Board name', 'Owner', 'Created', 'Updated', ''];

function DateTimeTableCell(props: {date: string, time: string}) {
  return (
    <TableCell sx={TableCellStyle}>
      <div style={DateTimeTableCellStyle}>
        {props.date}
        <br />
        {props.time}
      </div>
    </TableCell>
  );
}

function ActionTableCell() {
  const user = useAppSelector(state => state.account.user);

  return (
    <TableCell align="center" sx={TableCellStyle}>
      {user.isOwnerOfThisBoard ? <ErrorButton>DELETE</ErrorButton> : <SecondaryButton>LEAVE</SecondaryButton>}
    </TableCell>
  );
}

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
            <TableCell align="center" sx={TableCellStyle}>
              Board name
            </TableCell>
            <TableCell align="center" sx={TableCellStyle}>
              Milena Sergeevna
            </TableCell>
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
