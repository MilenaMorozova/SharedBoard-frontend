import { MouseEvent } from 'react';
import { Xwrapper } from 'react-xarrows';
import BoardType from '../../entities/board/board-type';
import Note from '../../entities/note/note';
import { enableNoteForOthers } from '../../service/websocket/websocket-sender';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { store } from '../../store/store';
import WorkspaceAppBar from '../app-bar/app-bar';
import { deselectSelectedNotes, selectArrows, selectNotes } from '../workspaceSlice';
import NotesActionPanel from './action-panel/action-panel';
import Arrow from './arrow/arrow';
import NoteCard from './note-card/note-card';
import { AppBarStyle, FullScreenStyle } from './style';


function NotesWorkspace() {
  const notes: Array<Note> = useAppSelector(selectNotes);
  const arrows: Map<string, string> = useAppSelector(selectArrows);

  const dispatch = useAppDispatch();

  const onClickBackground = (event: MouseEvent<HTMLDivElement>) => {
    let element = event.target as HTMLElement;
    if (element.id === 'NotesWorkspace_board') {
      store.getState().workspace.selectedNotesIds.forEach(enableNoteForOthers);
      dispatch(deselectSelectedNotes());
    }
  };

  return (
    <div
      id="NotesWorkspace"
      role="application"
      style={FullScreenStyle}
    >
      <div
        style={AppBarStyle}
      >
        <WorkspaceAppBar
          placeholder="search note by tag"
          boardType={BoardType.NOTES}
        />
      </div>
      <div
        id="NotesWorkspace_board"
        onClick={onClickBackground}
        style={FullScreenStyle}
        role="note"
      >
        <NotesActionPanel />
        <Xwrapper>
          {
            notes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))
          }
          {
            Array.from(arrows.entries()).map(([key, value]) => (
              <Arrow key={key} start={key} end={value} />
            ))
          }
        </Xwrapper>
      </div>
    </div>
  );
}

export default NotesWorkspace;
