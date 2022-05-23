import { Chip } from '@mui/material';
import COLORS from '../../../../colors';


function NoteTagChip(props: {label: string}) {
  return (
    <Chip
      label={props.label}
      sx={{ color: COLORS.CHIP_LABEL_PURPLE, backgroundColor: COLORS.CHIP_LIGHT_PURPLE }}
    />
  );
}

export default NoteTagChip;
