import { MenuItem, Select } from '@mui/material';
import Access from '../../../entities/user/access';
import { AccessSelectStyle, MenuItemStyle } from './style';


function AccessSelect(props: {value: Access, onChange: (access: Access) => void}) {
  return (
    <Select
      sx={AccessSelectStyle}
      size="small"
      variant="standard"
      value={props.value}
      onChange={(event) => props.onChange(event.target.value as Access)}
      displayEmpty
      disableUnderline
    >
      <MenuItem sx={MenuItemStyle} value={Access.VIEWER}>{Access.VIEWER}</MenuItem>
      <MenuItem sx={MenuItemStyle} value={Access.EDITOR}>{Access.EDITOR}</MenuItem>
      <MenuItem sx={MenuItemStyle} value={Access.OWNER}>{Access.OWNER}</MenuItem>
    </Select>
  );
}

export default AccessSelect;
