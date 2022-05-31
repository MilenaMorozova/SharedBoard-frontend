import { MouseEvent } from 'react';
import { Xwrapper } from 'react-xarrows';
import BoardType from '../../entities/board/board-type';
import Note from '../../entities/note/note';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ActionPanel from '../action-panel/action-panel';
import WorkspaceAppBar from '../app-bar/app-bar';
import { deselectSelectedNotes, selectArrows, selectNotes } from '../workspaceSlice';
import Arrow from './arrow/arrow';
import NoteCard from './note-card/note-card';


function NotesWorkspace() {
  const notes: Array<Note> = useAppSelector(selectNotes);
  const arrows: Map<string, string> = useAppSelector(selectArrows);

  const dispatch = useAppDispatch();

  const onClickBackground = (event: MouseEvent<HTMLDivElement>) => {
    let element = event.target as HTMLElement;
    if (element.id === 'NotesWorkspace') {
      dispatch(deselectSelectedNotes());
    }
  };

  return (
    <div
      id="NotesWorkspace"
      role="application"
      style={{ width: '100%', height: '100vh' }}
      onClick={onClickBackground}
    >
      <div
        style={{ width: '100%', position: 'absolute', zIndex: 11 }}
      >
        <WorkspaceAppBar
          placeholder="search note by tag"
          boardType={BoardType.NOTES}
        />
      </div>
      <div style={{ width: '100%', height: '100vh' }}>
        <ActionPanel />
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
