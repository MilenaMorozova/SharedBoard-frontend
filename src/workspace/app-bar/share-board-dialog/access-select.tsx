import { FormControl, MenuItem, Select } from '@mui/material';
import Access from '../../../entities/user/access';
import { AccessFormControlStyle, AccessSelectStyle, MenuItemStyle } from './style';


type AccessSelectProps = {
  value: Access, 
  onChange: (access: Access) => void, 
  disabled?: boolean,
}

function AccessSelect(props: AccessSelectProps) {
  return (
    <FormControl sx={AccessFormControlStyle}>
      <Select
        disabled={props.disabled}
        sx={AccessSelectStyle}
        size="small"
        variant="standard"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value as Access)}
        displayEmpty
        disableUnderline
      >
      <MenuItem sx={MenuItemStyle} value={Access.VIEWER}>
        {Access.VIEWER}
      </MenuItem>
      <MenuItem sx={MenuItemStyle} value={Access.EDITOR}>
        {Access.EDITOR}
      </MenuItem>
      { props.value === Access.OWNER ? (
        <MenuItem sx={MenuItemStyle} value={Access.OWNER}>
          {Access.OWNER}
        </MenuItem>        
      ) : (
        null
      )}
      </Select>
    </FormControl>
  );
}

AccessSelect.defaultProps = {
  disabled: false,
};

export default AccessSelect;
