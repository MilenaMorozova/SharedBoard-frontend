import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Button, Collapse } from '@mui/material';
import { useState } from 'react';
import COLORS from '../../../colors';
import Note from '../../../entities/note/note';
import {
  DescriptionBlockStyle, ExpandButonStyle, NoteCardStyle, NoteContentStyle, StripeStyle,
} from './style';
import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import TopNoteCard from './top-note-card/top-note-card';


function NoteCard() {
  const color = COLORS.ICON_PURPLE;
  const note = new Note();
  note.title = 'Create task';
  note.tag = 'patsvr-56';
  note.description = 'no description';

  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState(note.description);

  function ExpandButton() {
    return (
      <Button
        onClick={() => setExpanded(!expanded)}
        startIcon={expanded ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
        sx={ExpandButonStyle}
      >
        description
      </Button>
    );
  }

  return (
    <div style={NoteCardStyle}>
      <div style={{ ...StripeStyle, backgroundColor: color }} />
      <div style={NoteContentStyle}>
        <TopNoteCard />
        <ExpandButton />
        <Collapse in={expanded} timeout="auto" unmountOnExit sx={DescriptionBlockStyle}>
          <EditableText
            value={description}
            setValue={setDescription}
            textStyle={DescriptionBlockStyle}
            width="100%"
            multiline
            onSave={() => {}}
          />
        </Collapse>
      </div>
    </div>
  );
}

export default NoteCard;
