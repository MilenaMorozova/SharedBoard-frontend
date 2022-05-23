import BoardType from '../../entities/board-type';
import ActionPanel from '../action-panel/action-panel';
import WorkspaceAppBar from '../app-bar/app-bar';

function NotesWorkspace() {
  const onSearch = (text: string) => {};

  return (
    <>
      <WorkspaceAppBar
        placeholder="search note by tag"
        boardType={BoardType.NOTES}
        search={onSearch}
      />
      <ActionPanel/>
    </>
  );
}

export default NotesWorkspace;
