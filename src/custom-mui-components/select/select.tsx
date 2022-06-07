import { FormControl, MenuItem, Select } from '@mui/material';
import { AccessFormControlStyle, AccessSelectStyle, MenuItemStyle } from './style';


type BoardSelectProps = {
  value: string,
  width: string,
  possibleValues: Array<string>,
  onChange: (value: string) => void,
  disabled?: boolean,
}

function BoardSelect(props: BoardSelectProps) {
  return (
    <FormControl sx={AccessFormControlStyle}>
      <Select
        disabled={props.disabled}
        sx={{AccessSelectStyle, minWidth: props.width}}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        displayEmpty
      >
        {
            props.possibleValues.map(value => {
                return <MenuItem sx={MenuItemStyle} value={value}>
                {value}
              </MenuItem>
            })
        }
      </Select>
    </FormControl>
  );
}

BoardSelect.defaultProps = {
  disabled: false,
};

export default BoardSelect;