import { TableCell, TableCellProps } from '@mui/material';
import { SyntheticEvent } from 'react';
import ACCOUNT_CONTROLLER from '../../controller/AccountController';
import { ErrorButton, SecondaryButton } from '../../custom-mui-components/button/secondary/secondary-button';
import TableBoardItem from '../../entities/board/table-board-item';
import { useAppSelector } from '../../store/hooks';
import { DateTimeTableCellStyle, TableCellStyle } from './style';


export function CustomTableCell(props: TableCellProps) {
  return (
    <TableCell align="center" {...props} sx={{ ...TableCellStyle, ...props.sx }}>
      {props.children}
    </TableCell>
  );
}

export function DateTimeTableCell(props: {date: Date}) {
  return (
    <CustomTableCell sx={TableCellStyle}>
      <div style={DateTimeTableCellStyle}>
        {props.date.toLocaleDateString()}
        <br />
        {props.date.toLocaleTimeString()}
      </div>
    </CustomTableCell>
  );
}

export function ActionTableCell(props: {board: TableBoardItem}) {
  const user = useAppSelector(state => state.account.user);

  const onDeleteBoard = (event: SyntheticEvent) => {
    ACCOUNT_CONTROLLER.deleteBoard(props.board.id);
    event.stopPropagation();
  };

  const onLeaveBoard = (event: SyntheticEvent) => {
    ACCOUNT_CONTROLLER.leaveBoard(props.board.id);
    event.stopPropagation();
  };

  return (
    <CustomTableCell sx={TableCellStyle}>
      {user.isOwnerOfThisBoard(props.board) ? (
        <ErrorButton onClick={onDeleteBoard}>DELETE</ErrorButton>
      ) : (
        <SecondaryButton onClick={onLeaveBoard}>LEAVE</SecondaryButton>
      )}
    </CustomTableCell>
  );
}
