import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Button, Collapse } from '@mui/material';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useXarrow } from 'react-xarrows';
import Note from '../../../entities/note/note';
import {
  CardColorStyle,
  DescriptionBlockStyle, ExpandButonStyle, NoteCardStyle, NoteContentStyle, StripeStyle,
} from './style';
import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import TopNoteCard from './top-note-card';
import Reference from './reference-to-note';
import { useAppDispatch } from '../../../store/hooks';
import { updateNote } from '../../workspaceSlice';


function NoteCard(props: {note: Note}) {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useAppDispatch();

  const nodeRef = useRef(null);
  const updateXarrow = useXarrow();

  const onSaveDescription = () => {};

  const onUpdateDescription = (description: string) => {
    dispatch(updateNote({ ...props.note, description }));
  };

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
    <Draggable onDrag={updateXarrow} nodeRef={nodeRef}>
      <div
        id={props.note.tag}
        style={NoteCardStyle}
        ref={nodeRef}
      >
        <div style={{
          ...StripeStyle, backgroundColor: props.note.color,
        }}
        />
        <div style={{
          ...NoteContentStyle, borderColor: CardColorStyle[props.note.color],
        }}
        >
          <TopNoteCard note={props.note} />
          <Reference note={props.note} />
          <ExpandButton />
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            sx={DescriptionBlockStyle}
          >
            <EditableText
              value={props.note.description}
              setValue={onUpdateDescription}
              textStyle={DescriptionBlockStyle}
              width="100%"
              multiline
              onSave={onSaveDescription}
            />
          </Collapse>
        </div>
      </div>
    </Draggable>
  );
}

export default NoteCard;
