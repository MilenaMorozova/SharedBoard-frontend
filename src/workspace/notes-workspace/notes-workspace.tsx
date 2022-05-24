import { Xwrapper } from 'react-xarrows';
import BoardType from '../../entities/board/board-type';
import Note from '../../entities/note/note';
import { useAppSelector } from '../../store/hooks';
import ActionPanel from '../action-panel/action-panel';
import WorkspaceAppBar from '../app-bar/app-bar';
import { selectArrows, selectNotes } from '../workspaceSlice';
import Arrow from './arrow/arrow';
import NoteCard from './note-card/note-card';


function NotesWorkspace() {
  const notes: Array<Note> = useAppSelector(selectNotes);
  const arrows: Map<string, string> = useAppSelector(selectArrows);

  return (
    <>
      <WorkspaceAppBar
        placeholder="search note by tag"
        boardType={BoardType.NOTES}
      />
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
    </>
  );
}

export default NotesWorkspace;
