import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { Button, Collapse } from '@mui/material';
import { useRef, useState } from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { useXarrow } from 'react-xarrows';
import Note from '../../../entities/note/note';
import {
  CardColorStyle,
  DescriptionBlockStyle, ExpandButonStyle, NoteCardStyle, NoteContentStyle, StripeStyle,
} from './style';
import EditableText from '../../../custom-mui-components/text-fields/editable-text';
import TopNoteCard from './top-note-card';
import Reference from './reference-to-note';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addSelectedNote, selectSearchText, updateNote } from '../../workspaceSlice';


function NoteCard(props: {note: Note}) {
  const [expanded, setExpanded] = useState(false);
  const isSelected = useAppSelector(state => state.workspace.selectedNotesIds.has(props.note.id));

  const searchText = useAppSelector(selectSearchText);
  const nodeRef = useRef(null);

  const dispatch = useAppDispatch();
  const updateXarrow = useXarrow();

  const onSaveDescription = () => {};

  const onUpdateDescription = (description: string) => {
    dispatch(updateNote({ ...props.note, description }));
  };

  const onDrag = (event: DraggableEvent) => {
    updateXarrow();
  };

  const onStop = (event: DraggableEvent) => {
    let mouseEvent = event as MouseEvent;
    // TODO problem: descrition can not be expanded
    // dispatch(updateNote({ ...props.note, posX: mouseEvent.pageX, posY: mouseEvent.pageY }));
  };

  const boarderWhenIsSearching = () => {
    if (props.note.tag.startsWith(searchText) && searchText.length) {
      return {
        boxShadow: `0px 4px 12px ${props.note.color}`,
        borderRadius: '10px',
      };
    }
    return {};
  };

  const borderWhenIsSelected = () => {
    if (isSelected) {
      return {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        border: `2px dashed ${props.note.color}`,
      };
    }
    return {};
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
    <Draggable
      onDrag={onDrag}
      onStop={onStop}
      nodeRef={nodeRef}
      bounds="parent"
    >
      <div
        id={props.note.tag}
        style={{ ...NoteCardStyle, ...boarderWhenIsSearching(), ...borderWhenIsSelected() }}
        ref={nodeRef}
        onDoubleClick={() => { dispatch(addSelectedNote(props.note.id)); }}
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
