import { ButtonProps } from '@mui/material';
import BoardButton from '../button';
import { ErrorButtonStyle, SecondaryButtonStyle } from './style';

export function SecondaryButton(props: ButtonProps) {
  const { ref, ...other } = props; // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <BoardButton variant="outlined" {...other} sx={{ ...SecondaryButtonStyle, ...other.sx }} />
  );
}

export function ErrorButton(props: ButtonProps) {
  return (
    <SecondaryButton {...props} sx={ErrorButtonStyle} />
  );
}
