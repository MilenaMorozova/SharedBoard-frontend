import { Xwrapper } from 'react-xarrows';
import COLORS from '../../colors';
import BoardType from '../../entities/board/board-type';
import Note from '../../entities/note/note';
import ActionPanel from '../action-panel/action-panel';
import WorkspaceAppBar from '../app-bar/app-bar';
import Arrow from './arrow/arrow';
import NoteCard from './note-card/note-card';


let mockNote1  = new Note();
mockNote1.id="1";
mockNote1.title = 'Create task';
mockNote1.tag = 'patsvr-56';
mockNote1.description = 'no description';
mockNote1.color = COLORS.CHIP_LABEL_PURPLE;

let mockNote2  = new Note();
mockNote2.id="2";
mockNote2.title = 'Create task';
mockNote2.tag = 'patsvr-57';
mockNote2.description = 'no description';
mockNote2.color = COLORS.CHIP_LABEL_RED;

mockNote1.referenceToNote = mockNote2;
mockNote2.referenceToNote = mockNote1;


let mockNotes = [mockNote1, mockNote2]
function NotesWorkspace() {
  const notes: Array<Note> = mockNotes;
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
