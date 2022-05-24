import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Button, Collapse } from '@mui/material';
import { useRef, useState } from 'react';
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


function NoteCard(props: {note: Note}) {
  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState(props.note.description);
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
      <div id={props.note.id} style={NoteCardStyle}>
        <div style={{ ...StripeStyle, backgroundColor: props.note.color }} />
        <div style={{ ...NoteContentStyle, borderColor: CardColorStyle[props.note.color] }}>
          <TopNoteCard note={props.note}/>
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
