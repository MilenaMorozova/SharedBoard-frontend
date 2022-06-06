import React from 'react';
import Note, { notesAreEqual } from '../../../entities/note/note';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addSelectedNote, selectSearchText } from '../../workspaceSlice';
import { disableNoteForOthers } from '../../../service/websocket/websocket-sender';

import Avatar from '../../../custom-mui-components/avatar/avatar';
import { store } from '../../../store/store';
import WORKSPACE_CONTROLLER from '../../../controller/WorkspaceController';
import DescriptionCollapse from '../../notes-workspace/note-card/descrition-collapse/description-collapse';
import { NoteBoardWhenSearchingStyle, SelectedNoteStyle, AvatarStyle, StripeStyle, NoteContentStyle, CardColorStyle } from '../../notes-workspace/note-card/style';
import TopNoteCard from '../../notes-workspace/note-card/top-note-card';
import { TaskCardStyle } from './style';
import Assigned from './assigned';


type propsType = {note: Note};

function areEqual(prevProps: propsType, nextProps: propsType) {
  const res = notesAreEqual(prevProps.note, nextProps.note);
  return res;
}

const TaskCard = React.memo((props: propsType) => {
  const isSelected = useAppSelector(state => state.workspace.selectedNotesIds.has(props.note.id));
  const currentUser = useAppSelector(state => state.workspace.currentUser);

  const searchText = useAppSelector(selectSearchText);

  const dispatch = useAppDispatch();

  const onStart = () => {
    disableNoteForOthers(props.note.id);
    WORKSPACE_CONTROLLER.dragedTask = props.note;
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
      <div
        id={props.note.tag}
        style={{ ...TaskCardStyle, ...boarderWhenIsSearching(), ...borderWhenIsSelected() }}
        onDoubleClick={onSelectNote}
        draggable={!setDisabledNote()}
        onDragStart={onStart}
        onDragOver={event => event.preventDefault()}
        data-position={props.note.tag}
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
          <Assigned note={props.note} />
          <DescriptionCollapse note={props.note}/>
        </div>
      </div>
  );
}, areEqual);

export default TaskCard;