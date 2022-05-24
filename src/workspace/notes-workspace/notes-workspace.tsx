import { Xwrapper } from 'react-xarrows';
import BoardType from '../../entities/board/board-type';
import ActionPanel from '../action-panel/action-panel';
import WorkspaceAppBar from '../app-bar/app-bar';
import Arrow from './arrow/arrow';
import NoteCard from './note-card/note-card';

function NotesWorkspace() {
  const onSearch = (text: string) => {};

  return (
    <>
      <WorkspaceAppBar
        placeholder="search note by tag"
        boardType={BoardType.NOTES}
        search={onSearch}
      />
      <ActionPanel />
      <Xwrapper>
        <NoteCard id="1" />
        <NoteCard id="2" />
        <Arrow start="1" end="2" />
      </Xwrapper>
    </>
  );
}

export default NotesWorkspace;
