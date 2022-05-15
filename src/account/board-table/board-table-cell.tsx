import { TableCell, TableCellProps } from "@mui/material";
import { ErrorButton, SecondaryButton } from "../../custom-mui-components/button/secondary/secondary-button";
import { useAppSelector } from "../../store/hooks";
import { DateTimeTableCellStyle, TableCellStyle } from "./style";


export function CustomTableCell(props: TableCellProps) {
    return (
      <TableCell align='center' {...props} sx={{... TableCellStyle, ...props.sx}}>
        {props.children}
      </TableCell>
    );
  }
  
export function DateTimeTableCell(props: {date: string, time: string}) {
    return (
      <CustomTableCell sx={TableCellStyle}>
        <div style={DateTimeTableCellStyle}>
          {props.date}
          <br />
          {props.time}
        </div>
      </CustomTableCell>
    );
  }
  
export function ActionTableCell() {
    const user = useAppSelector(state => state.account.user);
  
    return (
      <CustomTableCell sx={TableCellStyle}>
        {user.isOwnerOfThisBoard ? <ErrorButton>DELETE</ErrorButton> : <SecondaryButton>LEAVE</SecondaryButton>}
      </CustomTableCell>
    );
  }
  