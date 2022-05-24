import { Xwrapper } from 'react-xarrows';
import BoardType from '../../entities/board/board-type';
import Note from '../../entities/note/note';
import ActionPanel from '../action-panel/action-panel';
import WorkspaceAppBar from '../app-bar/app-bar';
import Arrow from './arrow/arrow';
import NoteCard from './note-card/note-card';



function NotesWorkspace() {
  const notes: Array<Note> = [];
  const arrows: Map<string, string> = createArrowDict();

  const onSearch = (text: string) => {};

  function createArrowDict (): Map<string, string> {
    console.log(notes)
    let arrowDict = new Map();

    for (let note of notes) {
      if (note.referenceToNote === null) {
        continue;
      }
      arrowDict.set(note.id, note.referenceToNote.id);
    }
    return arrowDict;
  }

  return (
    <>
      <WorkspaceAppBar
        placeholder="search note by tag"
        boardType={BoardType.NOTES}
        search={onSearch}
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
            <Arrow key={key} start={key} end={value}/>
          ))
        }        
      </Xwrapper>
    </> 
  );
}

export default NotesWorkspace;
