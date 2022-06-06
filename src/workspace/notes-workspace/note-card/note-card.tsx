import React, { useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useXarrow } from 'react-xarrows';
import Note, { notesAreEqual } from '../../../entities/note/note';
import {
  AvatarStyle,
  CardColorStyle, NoteBoardWhenSearchingStyle, NoteCardStyle, NoteContentStyle, SelectedNoteStyle, StripeStyle,
} from './style';
import TopNoteCard from './top-note-card';
import Reference from './reference-to-note';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addSelectedNote, selectSearchText, updateNote } from '../../workspaceSlice';
import { changeNote, disableNoteForOthers, enableNoteForOthers } from '../../../service/websocket/websocket-sender';

import Avatar from '../../../custom-mui-components/avatar/avatar';
import { store } from '../../../store/store';
import DescriptionCollapse from './descrition-collapse/description-collapse';
import WORKSPACE_CONTROLLER from '../../../controller/WorkspaceController';


let lastSendedMessageTime: Date = new Date();
type propsType = {note: Note};

function areEqual(prevProps: propsType, nextProps: propsType) {
  const res = notesAreEqual(prevProps.note, nextProps.note);
  return res;
}

const NoteCard = React.memo((props: propsType) => {
  const isSelected = useAppSelector(state => state.workspace.selectedNotesIds.has(props.note.id));
  const currentUser = useAppSelector(state => state.workspace.currentUser);

  const searchText = useAppSelector(selectSearchText);
  const nodeRef = useRef(null);

  const dispatch = useAppDispatch();
  const updateXarrow = useXarrow();

  const onStart = () => {
    disableNoteForOthers(props.note.id);
  };

  const onDrag = (event: DraggableEvent, data: DraggableData) => {
    const newNote = {
      ...props.note,
      posX: data.x,
      posY: data.y,
    };
    dispatch(updateNote(newNote));
    updateXarrow();

    const currentTime = new Date();
    if ((+currentTime - +lastSendedMessageTime) > 1000 / 30) {
      changeNote(newNote);
      lastSendedMessageTime = new Date();
    }
  };

  const onStop = () => {
    enableNoteForOthers(props.note.id);
  };

  const setDisabledNote = () => {
    return WORKSPACE_CONTROLLER.setDisableElement(props.note, currentUser)
  };

  const onSelectNote = () => {
    if (props.note.blockedBy === null) {
      dispatch(addSelectedNote(props.note.id));
      disableNoteForOthers(props.note.id);
    }
  };

  const boarderWhenIsSearching = () => {
    if (props.note.tag.startsWith(searchText) && searchText.length) {
      return {
        ...NoteBoardWhenSearchingStyle,
        color: props.note.color,
      };
    }
    return {};
  };

  const borderWhenIsSelected = () => {
    if (isSelected) {
      return {
        ...SelectedNoteStyle,
        borderColor: props.note.color,
      };
    }
    return {};
  };

  function UserAvatarWhoBlockingNote() {
    if (props.note.blockedBy === null || props.note.blockedBy === currentUser.id) {
      return null;
    }
    const anotherUser = store.getState().workspace.activeCollaborators.find(
      collaborator => collaborator.id === props.note.blockedBy,
    );
    if (anotherUser === undefined) {
      return null;
    }
    return <Avatar user={anotherUser} style={AvatarStyle} />;
  }

  return (
    <Draggable
      key={`Draggable ${props.note.id}`}
      disabled={setDisabledNote()}
      onStart={onStart}
      onDrag={onDrag}
      onStop={onStop}
      position={{ x: props.note.posX, y: props.note.posY }}
      nodeRef={nodeRef}
      bounds="parent"
    >
      <div
        id={props.note.tag}
        style={{ ...NoteCardStyle, ...boarderWhenIsSearching(), ...borderWhenIsSelected() }}
        ref={nodeRef}
        onDoubleClick={onSelectNote}
      >
        <UserAvatarWhoBlockingNote />
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
          <DescriptionCollapse note={props.note}/>
        </div>
      </div>
    </Draggable>
  );
}, areEqual);

export default NoteCard;