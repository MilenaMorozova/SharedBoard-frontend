import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Button, Collapse } from '@mui/material';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { useXarrow } from 'react-xarrows';
import COLORS from '../../../colors';
import Note from '../../../entities/note/note';
import {
  CardColorStyle,
  DescriptionBlockStyle, ExpandButonStyle, NoteCardStyle, NoteContentStyle, StripeStyle,
} from './style';
import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import TopNoteCard from './top-note-card';


function NoteCard(props: {id: string}) {
  const note = new Note();
  note.title = 'Create task';
  note.tag = 'patsvr-56';
  note.description = 'no description';
  note.color = COLORS.CHIP_LABEL_PURPLE;
  note.id = props.id;

  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState(note.description);
  const updateXarrow = useXarrow();

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
    <Draggable onDrag={updateXarrow}>
      <div id={note.id} style={NoteCardStyle}>
        <div style={{ ...StripeStyle, backgroundColor: note.color }} />
        <div style={{ ...NoteContentStyle, borderColor: CardColorStyle[note.color] }}>
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
    </Draggable>
  );
}

export default NoteCard;
