import { InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import BoardTextField, { BoardTextFieldProps } from './text-field';
import { SearchTextFieldStyle } from './style';


type SearchFieldProps = BoardTextFieldProps & {
    search: (text: string) => void,
    placeholder: string,
}

function SearchField(props: SearchFieldProps) {
  const { ref, search, ...other } = props; // eslint-disable-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState('');

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      search(value);
    }
  };

  return (
    <BoardTextField
      {...other}
      className="board-password-text-field"
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      InputProps={{
        startAdornment:
  <InputAdornment position="start">
    <SearchOutlinedIcon />
  </InputAdornment>,
      }}
      placeholder={`${props.placeholder}...`}
      onKeyUp={onEnter}
      size="small"
      margin="none"
      helperText={null}
      sx={{ ...SearchTextFieldStyle, ...props.sx }}
    />
  );
}

export default SearchField;
