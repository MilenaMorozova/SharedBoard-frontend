import BoardType from '../../entities/board/board-type';
import ActionPanel from '../action-panel/action-panel';
import WorkspaceAppBar from '../app-bar/app-bar';
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
      <NoteCard />
    </>
  );
}

export default NotesWorkspace;
