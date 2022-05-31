import { Chip } from '@mui/material';
import { CSSProperties } from 'react';


function NoteTagChip(props: {label: string, sx: CSSProperties}) {
  return (
    <Chip
      label={props.label}
      sx={props.sx}
    />
  );
}

export default NoteTagChip;
