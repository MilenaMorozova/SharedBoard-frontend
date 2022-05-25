import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import Access from '../../../entities/user/access';
import { AccessSelectStyle, MenuItemStyle } from './style';


function AccessSelect(props: {defaultValue: Access}) {
  const [access, setAccess] = useState(props.defaultValue);

  return (
    <Select
      sx={AccessSelectStyle}
      size="small"
      variant="standard"
      value={access}
      onChange={(event) => setAccess(event.target.value as Access)}
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
