import { ButtonProps } from '@mui/material';
import BoardButton from '../button';
import TextButtonStyle from './style';

function TextButton(props: ButtonProps) {
  const { ref, ...other } = props; // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <BoardButton {...other} sx={{ ...TextButtonStyle, ...other.sx }} />
  );
}

export default TextButton;
