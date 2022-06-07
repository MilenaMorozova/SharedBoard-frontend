import { FormControl, MenuItem, Select } from '@mui/material';
import { AccessFormControlStyle, AccessSelectStyle, MenuItemStyle } from './style';


type BoardSelectProps = {
  value: any,
  width: string,
  possibleValues: Array<any>,
  getText: (value: any) => string,
  onChange: (value: any) => void,
  disabled?: boolean,
}

function BoardSelect(props: BoardSelectProps) {
  return (
    <FormControl sx={AccessFormControlStyle}>
      <Select
        disabled={props.disabled}
        sx={{AccessSelectStyle, width: props.width}}
        value={props.value === null || props.value === undefined ? '' : props.value}
        onChange={(event) => props.onChange(event.target.value)}
        displayEmpty
      >
        {
            props.possibleValues.map((value, i) =>  (
            <MenuItem sx={MenuItemStyle} value={value} key={`${props.getText(value)} ${i}`}>
                {props.getText(value)}
              </MenuItem>)
            )
        }
      </Select>
    </FormControl>
  );
}

BoardSelect.defaultProps = {
  disabled: false,
};

export default BoardSelect;