import { useEffect } from 'react';
import BoardType from '../entities/board/board-type';
import WEBSOCKET_CONNECTION from '../service/websocket/websocket-connection';
import { getAllActiveUsers, getAllNotes, getAllUsers } from '../service/websocket/websocket-sender';
import { useAppSelector } from '../store/hooks';
import NotesWorkspace from './notes-workspace/notes-workspace';
import WorkspaceStyle from './style';


function Workspace() {
  const currentBoardType = useAppSelector(state => state.workspace.board.type);

  useEffect(() => {
    if (!WEBSOCKET_CONNECTION.isConnect) {
      WEBSOCKET_CONNECTION.connect();
      getAllUsers();
      getAllActiveUsers();
      getAllNotes();
    }
  }, [])

  function WorkspaceContent() {
    switch(currentBoardType) {
      case BoardType.KANBAN:
        return <></>
      case BoardType.NOTES:
        return <NotesWorkspace />
    }
  }

  return (
    <div id="Workspace_div" style={WorkspaceStyle}>
      <WorkspaceContent/>
    </div>
  );
}

export default Workspace;
